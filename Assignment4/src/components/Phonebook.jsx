import React from 'react'

export const Filter = ({ value, onChange }) => (
  <div>
    البحث: <input value={value} onChange={onChange} />
  </div>
)

export const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>الاسم: <input value={name} onChange={onNameChange} /></div>
    <div>الرقم: <input value={number} onChange={onNumberChange} /></div>
    <div><button type="submit">إضافة</button></div>
  </form>
)

export const Persons = ({ persons }) => (
  <ul>
    {persons.map(person => (
      <li key={person.id}>{person.name}: {person.number}</li>
    ))}
  </ul>
)