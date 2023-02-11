import React, { useState } from 'react';
import '../css/todoapp.css'

const TodoApp = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ name: '', category: '' });
  const [clicked, setClicked]  = useState(false); 
  const addTodo = (name, category) => {
    props.addTodos([...props.todolist, { name, category }]);
    setCurrentTodo({ name: '', category: '' });
    setShowForm(props.todolist);
  };

  const handleChange = (event) => {
    setCurrentTodo({ ...currentTodo, [event.target.name]: event.target.value });
  };

  const editTodo = (index) => {
    setCurrentTodo({ ...props.todolist[index] });
    setShowForm(true);
  };

  const deleteTodo = (index) => {
    const newTodos = [...props.todolist];
    newTodos.splice(index, 1);
    props.addTodos(newTodos);
  };
  return (
    <div className="todoapp">
      <h1 className='header'>List.</h1>
      <button id="add--button" onClick={() => {
        setShowForm(!showForm)
        setClicked(!clicked)
      }
      }>{clicked && <span>Add Task</span>}
      {!clicked && <span>X</span>}</button>
      {showForm && (
        <form className='form--card'>
          <h3>New Task</h3>
          <input
            type="text"
            name="name"
            placeholder="Add Task"
            value={currentTodo.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={currentTodo.category}
            onChange={handleChange}
          />
          <button 
          id = "addtask--button"
          onClick={(e) => {
            addTodo(currentTodo.name, currentTodo.category)
            setShowForm(!showForm)
            e.preventDefault();
            }
          }>
            Add
          </button>
        </form>
      )}
      <ul className='task--list'>
        {props.todolist.map((todo, index) => {
         if (props.selectedCategory === null || todo.category === props.selectedCategory) {
        return(
          <li key={index} className='task--tile'>
            {/* <b>Name:</b> */}
             {/* <b>Category:</b>  */}
             <div className="task--info">
              <span id="task--name">{todo.name}</span>
              <span id="category">{todo.category}{' '}</span>
            </div>
            <div className='btn--group'>
            <button onClick={() => {
              editTodo(index)
              deleteTodo(index)
            }}>Edit
            </button>{' '}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        );
      }
      return null;
    }
    )
    }
      </ul>
    </div>
  );
}

export default TodoApp;

