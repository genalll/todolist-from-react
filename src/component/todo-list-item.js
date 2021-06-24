import React from "react";


const styleImportant=(important)=>{
    if (important){
         return {color:"red"}
    }
}
const TodoListItem=({lable, important = false})=>{
    return (
       <span style={styleImportant(important)}>{lable}</span>
    );
}

export default TodoListItem;