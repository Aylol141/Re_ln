import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Unicafe from './components/Unicafe'
import Anecdotes from './components/Anecdotes'
import Todo from './components/Todo'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const anecdotes = [
    "يا الله، إنَّ في قلبي غصَّة لا ينهيها إلا لُطفك. <br><small>— ليطمئن قلبي</small>",
    "أعتقد أن أهم صفة يجب أن يتحلى بها الإنسان هي الخيال. <br><small>— يا صاحب الظل الطويل</small>",
    "لا بأس يا صاحبي، إن الله يرى التقلب في عينيك، ويسمع ضجيج قلبك. <br><small>— السلام عليك يا صاحبي</small>",
    "الحب هو تلك القوة التي تجعلك تخرج من حدود ذاتك لتسكن في روح شخص آخر. <br><small>— إيكادولي</small>",
    "في تمام الساعة 11:11، تمنيتُ ألا تفارقني تلك الطمأنينة. <br><small>— 11:11</small>",
    "الحداد ليس في ما نرتدي، بل في ما نعيشه.. لذا الأسود يليق بكِ. <br><small>— الأسود يليق بك</small>",
    "في أرض زيكولا، لا تتعامل بالمال، بل بوحدات ذكائك. <br><small>— أرض زيكولا</small>",
    "ستبقى دائماً أنت لي، مهما باعدت بيننا المسافات. <br><small>— أنت لي</small>",
    "ليس عليك أن تكون قوياً دائماً، أحياناً يكفي أن تكون حقيقياً. <br><small>— أرسس</small>",
    "أيلول هو شهر الوداع الهادئ، حيث تسقط الأوراق لتبدأ حكاية جديدة. <br><small>— عن أيلول</small>"
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  return (
    <div className="container">
      <section><Counter counter={counter} setCounter={setCounter} /></section>
      <section><Unicafe good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} /></section>
      <section><Anecdotes anecdotes={anecdotes} selected={selected} setSelected={setSelected} votes={votes} setVotes={setVotes} /></section>
      <section><Todo tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} /></section>
    </div>
  )
}
export default App