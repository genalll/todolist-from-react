import React from "react";
import TodoListItem from "./todo-list-item"; //Импортируем React



const ToDoList=({todos})=> {
  const elements=todos.map((item)=>{
    return <li key={item.id}> <TodoListItem lable={item.lable} important={item.important}/></li>
  }
  )
  return <ul>{elements}</ul>
};
export default ToDoList;