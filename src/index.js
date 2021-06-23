import React from "react"; //Импортируем React
import ReactDOM from "react-dom";//Импортируем ReactDOM

const Header=()=>{
  return (<h1>Список дел</h1>)
};

const ToDoList=()=> {
  return (<ul>
  <li>Учим реакт</li>
  <li>Выйти на улицу</li>
  <li>Выжить в борьбе</li>
  <li>Найти работу</li>
</ul>);
};

const SearchBlock=()=>{
  return (
    <input placeholder="Поиск"></input>
  )
};

const App=()=>{
  return (
    <div>
    <Header />
    <SearchBlock />
    <ToDoList />
    </div>
  )
}



ReactDOM.render(<App />,document.getElementById("root")); //Метод рендер принимает 1м аргументом то что надо отрисовать, вторым аргументом то где надо отрисовать.
console.log("hello world");