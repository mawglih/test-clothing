import { useState } from 'react';

const Todo = ({
  todo,
  deleteTodo,
  updateTodo,
  toggleClass,
}) => {
  const {title} = todo;
  const [isEditing, setEditing] = useState(false);
  const [data, setData] = useState({title});
  const startEditing = () => {
    setEditing(!isEditing)
  }
  const handleChange = e => {
    const {name, value} = e.target;
    setData({[name]: value})
  }
  const handleSubmit = e => {
    e.preventDefault();
    updateTodo(data.title, todo.id);
    setEditing(!isEditing);
  }
  const toggleComplete = () => {
    toggleClass(todo.id);
  }
  return (
    <div className="todo-single">
      {isEditing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={data.title}
            />
            <button>Submit</button>
          </form>
        </div>
      ) : (
        <>
        <div className="todo-title" onClick={toggleComplete}>
          <h2 className={todo.completed ? "completed" : null}>{todo.title}</h2>
          </div>
        <div className="todo-buttons">
          <button onClick={startEditing}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </>
      )}
    </div>
  )
}
export default Todo;
