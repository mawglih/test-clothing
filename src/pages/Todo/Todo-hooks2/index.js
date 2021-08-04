import { useState, useEffect } from 'react';
import './todohooks2.scss';

const TodoHooks = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState(0);
  async function getData(link) {
    try {
      let res = await fetch(link);
      const data = await res.json();
      console.log('data in fetch', data);
      setTodos(data);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getData(url);
  }, []);
  return(
    <div className="todo-main">
      {todos.map(todo => {
        return (
          <div key={todo.id} className="todo-item">
            <h2>{todo.title}</h2>
            <h3>{todo.completed ? 'Completed' : 'Needs attention'}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default TodoHooks;
