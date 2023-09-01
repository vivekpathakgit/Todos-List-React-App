// import './App.css';
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./MyComponents/addTodo";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let addTodo = (title, desc)=>{
    let sno = todos.length===0? 1 : todos[todos.length-1].sno+1;
    let myTodo = {sno: sno, title:title, desc: desc};
    setTodos([...todos, myTodo]);
  }

  let onDelete = (todo)=>{
    console.log('I am delete of', todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />
        <Routes>
            <Route exact path="/" element={
                <>
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
                </>
              
            }>
              
            </Route>
            <Route exact path="/about" element={
              <About />
            }>
              
            </Route>
          </Routes>

        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
