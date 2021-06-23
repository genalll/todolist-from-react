import React from "react"; //Импортируем React
import ReactDOM from "react-dom";//Импортируем ReactDOM
import SearchBlock from "../src/component/search-block.js";
import Header from "../src/component/header.js";
import ToDoList from "../src/component/todo-list.js";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBlock />
      <ToDoList />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root")); //Метод рендер принимает 1м аргументом то что надо отрисовать, вторым аргументом то где надо отрисовать.
console.log("hello world");