import React from "react";
import "./todo-list-item.css";


const styleImportant=(important)=>{
    if (important){
         return {color:"red"}
    }
}
const TodoListItem=({lable,important = false})=>{
   console.log(lable);
    return (<span style={styleImportant(important)} className="todolistitem">{lable}
            <div className="button">
            <button class="btn btn-primary" type="submit"><i class="bi bi-alarm alarm"></i></button>
            <button class="btn btn-primary" type="submit"><i class="bi bi-bucket-fill"></i></button>
            </div>
            </span>
    
            )
    
       
    
}

export default TodoListItem;