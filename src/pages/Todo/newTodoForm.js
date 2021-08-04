import { useState } from 'react';
import './todo.scss'

const NewTodoForm = ({
  submitData,
}) => {
  const [data, setData] = useState({});
  const handleChange = e => {
    const {name, value} = e.target;
    setData({[name]: value});
  }
  const handleSubmit = e => {
    e.preventDefault();
    const newData = { ...data, id: Math.floor(Math.random()*11111110000), completed: false}
    submitData(newData);
    setData({title:''});
  }
  return (
    <form className='form-todo' onSubmit={handleSubmit}>
    <label htmlFor='todo'>New Todo
      <input
        name='title'
        value={data.title}
        onChange={handleChange}
      />
    </label>
    <button>Add Todo</button>
  </form>
  )
}

export default NewTodoForm;
