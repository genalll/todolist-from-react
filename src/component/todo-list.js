import React from "react";
import TodoListItem from "./todo-list-item"; //Импортируем React
const ToDoList=()=> {
  return (<ul>
  <li><TodoListItem lable="Выпить кофе!"/></li>
  <li><TodoListItem lable="Поехать на дачу!"/></li>
  <li><TodoListItem lable="Освоить реакт!"/></li>
  <li><TodoListItem lable="Погулять с илюхой!" important/></li>
</ul>);
};
export default ToDoList;