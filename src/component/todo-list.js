import React from "react";
import TodoListItem from "./todo-list-item"; //Импортируем React
const ToDoList=()=> {
  return (<ul>
  <li><TodoListItem /></li>
  <li><TodoListItem /></li>
  <li><TodoListItem /></li>
  <li><TodoListItem /></li>
</ul>);
};
export default ToDoList;