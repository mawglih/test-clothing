import { Component } from 'react';
import NewTodoForm from './newTodoForm';
import Todo from './todo';
import './todo.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }
  createTodo = data => {
    this.setState({
      todos: [ ...this.state.todos, data]
    });
  }
  removeTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(i => i.id !== id)]
    });
  }
  updateTodo = (data,id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, title: data};
      }
      return todo;
    });
  console.log("updatedTodos", updatedTodos)
  this.setState({todos: updatedTodos})
  }
  toggleComplete = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
  this.setState({todos: updatedTodos})
  }
  render() {
    const { todos } = this.state;
    console.log('all todos', todos)
    return (
     <div className="todo-content">
       {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={id => this.removeTodo(id)} updateTodo={(data,id) => this.updateTodo(data,id)} toggleClass={(id) => this.toggleComplete(id)}/>)}
       <NewTodoForm submitData={data => this.createTodo(data)}/>
     </div>
    )
  }
}
export default TodoList;
