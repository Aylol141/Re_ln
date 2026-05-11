import React from 'react'

const CountryDetails = ({ country }) => (
  <div className="country-details animate-in">
    <img src={country.flags.png} alt={country.name.common} className="flag-img" />
    <div className="info">
      <h2>{country.name.common}</h2>
      <p>🏛️ العاصمة: {country.capital?.[0]}</p>
      <p>📏 المساحة: {country.area.toLocaleString()} كم²</p>
      <p>👥 السكان: {country.population?.toLocaleString()}</p>
    </div>
  </div>
)

const Countries = ({ filtered, onShow, searchTerm }) => {
  // إذا الحقل فارغ لا تعرض شيئاً
  if (!searchTerm) return null;

  // تصفية الدول التي *تبدأ* حصراً بنص البحث [cite: 235]
  const startsWith = filtered.filter(c => 
    c.name.common.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  if (startsWith.length === 0) return <p className="status-msg">لا توجد نتائج مطابقة...</p>

  return (
    <ul className="list-container">
      {startsWith.map(c => (
        <li key={c.cca3} className="list-item">
          <span>{c.name.common}</span>
          <button className="show-btn" onClick={() => onShow(c)}>عرض</button>
        </li>
      ))}
    </ul>
  )
}

// التصدير ضروري جداً لحل مشكلة الشاشة البيضاء [cite: 273]
export { Countries, CountryDetails }