const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) return <p>لا توجد إحصائيات حالياً</p>
  return (
    <table>
      <tbody>
        <tr><td>جيد</td><td>{good}</td></tr>
        <tr><td>حيادي</td><td>{neutral}</td></tr>
        <tr><td>سيء</td><td>{bad}</td></tr>
        <tr><td>الجميع</td><td>{all}</td></tr>
        <tr><td>المتوسط</td><td>{((good - bad) / all).toFixed(1)}</td></tr>
        <tr><td>إيجابي</td><td>{((good / all) * 100).toFixed(1)} %</td></tr>
      </tbody>
    </table>
  )
}

const Unicafe = ({ good, setGood, neutral, setNeutral, bad, setBad }) => (
  <div>
    <h2>Unicafe</h2>
    <button onClick={() => setGood(good + 1)}>جيد</button>
    <button onClick={() => setNeutral(neutral + 1)}>حيادي</button>
    <button onClick={() => setBad(bad + 1)}>سيء</button>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
)
export default Unicafe