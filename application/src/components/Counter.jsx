const Display = ({ counter }) => <div><h1>Counter: {counter}</h1></div>
const Button = ({ onClick, text }) => <button onClick={onClick} style={{margin: '5px'}}>{text}</button>

const Counter = ({ counter, setCounter }) => (
  <div>
    <h2> Counter </h2>
    <Display counter={counter} />
    <Button onClick={() => setCounter(counter + 1)} text="plus" />
    <Button onClick={() => setCounter(0)} text="zero" />
    <Button onClick={() => setCounter(counter - 1)} text="minus" />
  </div>
)
export default Counter