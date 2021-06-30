import React from "react";


const styleImportant=(important)=>{
    if (important){
         return {color:"red"}
    }
}
const TodoListItem=({lable,important = false})=>{
   console.log(lable);
    return <span style={styleImportant(important)}>{lable}</span> 
    
       
    
}

export default TodoListItem;