import React from 'react'

// مكوّن عرض العنوان
const Header = ({ name }) => <h2>{name}</h2>

// مكوّن عرض سطر واحد (جزء من المادة)
const Part = ({ part }) => (
  <p>{part.name}: {part.exercises} تمرين</p>
)

// مكوّن يجمع الأجزاء ويعرضها باستخدام map
const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

// مكوّن حساب المجموع باستخدام reduce
const Total = ({ parts }) => {
  // reduce بتمر على كل عناصر المصفوفة وبتجمع قيم التمارين 
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><strong>مجموع التمارين: {total}</strong></p>
  )
}

// المكوّن الرئيسي للمادة الواحدة
const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course