import React from "react"; //Импортируем React
import ReactDOM from "react-dom";//Импортируем ReactDOM

const el= (
  <div>
    <h1>Список дел</h1>
    <input placeholder="Поиск"></input>
    <ul>
      <li>Учим реакт</li>
      <li>Выйти на улицу</li>
      <li>Выжить в борьбе</li>
      <li>Найти работу</li>
    </ul>
  </div>
); // Обьявляем константу елемент, средствами jsx.


ReactDOM.render(el,document.getElementById("root")); //Метод рендер принимает 1м аргументом то что надо отрисовать, вторым аргументом то где надо отрисовать.
console.log("hello world");