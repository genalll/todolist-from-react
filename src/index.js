import React from "react"; //Импортируем React
import ReactDOM from "react-dom";//Импортируем ReactDOM
import SearchBlock from "../src/component/search-block.js";
import Header from "../src/component/header.js";
import ToDoList from "../src/component/todo-list.js";



const App = () => {
  const todolist=[
    {lable:"выпить кофе",important:true},
    {lable:"сездить на дачу"},
    {lable:"Выпить чаю"},
    {lable:"Реакт хуярю"},
  ]
  return (
    <div>
      <Header />
      <SearchBlock />
      <ToDoList todos={todolist}/>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root")); //Метод рендер принимает 1м аргументом то что надо отрисовать, вторым аргументом то где надо отрисовать.
console.log("hello world");