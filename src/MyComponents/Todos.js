import React from "react";
import {TodoItem} from "./TodoItem"
export const Todos = (props) => {
  let myStyle = {
    minHeight: "45vh"
  }
  return (
  <div className="container my-3" style={myStyle}>
    <h3 className="text-center">Todos List</h3>  
    {props.todos.length===0?"No more todos to delete":props.todos.map((e)=>{
      return(<TodoItem todo={e} key={e.sno} onDelete={props.onDelete}/>);
    })}
  </div>)
};
