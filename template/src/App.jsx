import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Course from './components/Course'
import { Filter, PersonForm, Persons } from './components/Phonebook'
import { Countries, CountryDetails } from './components/Countries'

const App = () => {
  // بيانات المواد من الملف [cite: 50-81]
  const courses = [
    {
      name: 'تطوير تطبيقات Half Stack',
      id: 1,
      parts: [
        { name: 'أساسيات React', exercises: 10, id: 1 },
        { name: 'استخدام props لتمرير البيانات', exercises: 7, id: 2 },
        { name: 'حالة المكون', exercises: 14, id: 3 },
        { name: 'تطبيقات React', exercises: 11, id: 4 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { name: 'التوجيه (Routing)', exercises: 3, id: 1 },
        { name: 'الوسائط (Middlewares)', exercises: 7, id: 2 }
      ]
    }
  ]

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  // جلب البيانات [cite: 150-154, 226-232]
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => setPersons(res.data))
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(res => setCountries(res.data))
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} موجود مسبقاً!`) 
      return
    }
    const newObj = { name: newName, number: newNumber, id: String(persons.length + 1) }
    setPersons(persons.concat(newObj))
    setNewName(''); setNewNumber('')
  }

  const personsToShow = persons.filter(p => p.name.toLowerCase().includes(personFilter.toLowerCase()))
  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(countryFilter.toLowerCase()))

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>منهاج الويب - المهمة 4</h1>

      <section>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </section>

      <section>
        <h2>📞 دليل الهاتف</h2>
        <Filter value={personFilter} onChange={(e) => setPersonFilter(e.target.value)} />
        <PersonForm onSubmit={addPerson} name={newName} number={newNumber} 
                    onNameChange={(e) => setNewName(e.target.value)} 
                    onNumberChange={(e) => setNewNumber(e.target.value)} />
        <Persons persons={personsToShow} />
      </section>

      <section>
        <h2>🌍 استكشاف الدول</h2>
        <input 
          value={countryFilter} 
          placeholder="ابحث بالحرف الأول..." 
          onChange={(e) => { setCountryFilter(e.target.value); setSelectedCountry(null); }} 
        />
        {selectedCountry ? (
          <CountryDetails country={selectedCountry} />
        ) : (
          <Countries filtered={countriesToShow} onShow={setSelectedCountry} searchTerm={countryFilter} />
        )}
      </section>
    </div>
  )
}

export default App