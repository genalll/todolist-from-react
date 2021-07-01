import React from "react"; //Импортируем React
import "./search-block.css"

export default class SearchBlock extends React.Component{
  render(){
    return (
      <div className="centr">
      <input className="search-block" placeholder="Поиск"></input>
      <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">Все</button>
      <button type="button" className="btn btn-primary">Активные</button>
      <button type="button" className="btn btn-primary">Выполненные</button>
      </div>
      </div>
    )
  }
}


  