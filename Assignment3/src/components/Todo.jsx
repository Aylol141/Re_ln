const Todo = ({ tasks, setTasks, newTask, setNewTask }) => (
  <div>
    <h2> To-Do List </h2>
    <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
    <button onClick={() => {setTasks([...tasks, newTask]); setNewTask('')}}>Add Task</button>
    <ul>{tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
  </div>
)
export default Todo