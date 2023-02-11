import SideBar from "./components/SideBar";
import './App.css'
import TodoApp from "./components/TodoApp";
import Test from "./components/Test";
import React, { useState } from "react";

const App = () => {
 
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      <SideBar 
        todolist = { todos }
        selectedCategory = { selectedCategory }
        setCategory = { setSelectedCategory }
      />
      <TodoApp 
        todolist = { todos }
        addTodos = { setTodos }
        selectedCategory = { selectedCategory }
       />
    </div>
  );
};

export default App;