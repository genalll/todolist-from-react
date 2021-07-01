import React from "react"; //Импортируем React
import "./search-block.css"
const SearchBlock=()=>{
    return (
      <div className="centr">
      <input className="search-block" placeholder="Поиск"></input>
      <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">Все</button>
      <button type="button" class="btn btn-primary">Активные</button>
      <button type="button" class="btn btn-primary">Выполненные</button>
      </div>
      </div>
    )
  };

  export default SearchBlock;