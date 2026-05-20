import { useState, useEffect } from 'react'
import personService from './services/persons'

const Notification = ({ message, type }) => {
  if (!message) return null

  const style = {
    color: type === 'error' ? 'red' : 'green',
    background: '#f0f0f0',
    fontSize: '18px',
    border: `2px solid ${type === 'error' ? 'red' : 'green'}`,
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px'
  }

  return <div style={style}>{message}</div>
}

const Filter = ({ value, onChange }) => (
  <div>
    البحث:
    <input value={value} onChange={onChange} />
  </div>
)

const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      الاسم:
      <input value={name} onChange={onNameChange} />
    </div>

    <div>
      الرقم:
      <input value={number} onChange={onNumberChange} />
    </div>

    <button type="submit">إضافة</button>
  </form>
)

const Person = ({ person, onDelete }) => (
  <li>
    {person.name} : {person.number}
    <button onClick={() => onDelete(person.id, person.name)}>
      حذف
    </button>
  </li>
)

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('success')

  useEffect(() => {
    personService.getAll().then(data => {
      setPersons(data)
    })
  }, [])

  const showNotification = (text, type = 'success') => {
    setMessage(text)
    setMessageType(type)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} موجود مسبقاً، هل تريد تحديث الرقم؟`
      )

      if (confirmUpdate) {
        const updatedPerson = {
          ...existingPerson,
          number: newNumber
        }

        personService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(p =>
                p.id !== existingPerson.id ? p : returnedPerson
              )
            )

            showNotification(`تم تحديث رقم ${newName}`)
            setNewName('')
            setNewNumber('')
          })
          .catch(() => {
            showNotification(`${newName} حُذف مسبقاً من الخادم`, 'error')

            setPersons(
              persons.filter(p => p.id !== existingPerson.id)
            )
          })
      }

      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService.create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        showNotification(`تمت إضافة ${newName}`)
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id, name) => {
    const confirmDelete = window.confirm(
      `هل تريد حذف ${name} ؟`
    )

    if (confirmDelete) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
        showNotification(`تم حذف ${name}`, 'error')
      })
    }
  }

  const filteredPersons = filter
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h1>دليل الهاتف</h1>

      <Notification message={message} type={messageType} />

      <Filter
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <h2>إضافة جديدة</h2>

      <PersonForm
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onNameChange={(e) => setNewName(e.target.value)}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />

      <h2>الأرقام</h2>

      <ul>
        {filteredPersons.map(person => (
          <Person
            key={person.id}
            person={person}
            onDelete={deletePerson}
          />
        ))}
      </ul>
    </div>
  )
}

export default App