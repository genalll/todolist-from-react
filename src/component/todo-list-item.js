import React from "react";
import "./todo-list-item.css";





export default class TodoListItem extends React.Component{
    
    render(){
        const styleImportant=(important)=>{
            if (important){
                 return {color:"red"}
            }
        }
        const {lable,important=false}=this.props;
        return (<span onClick={()=> alert('Привет')} style={styleImportant(important)} className="todolistitem">{lable}
        <div className="button">
        <button className="btn btn-primary" type="submit"><i className="bi bi-alarm alarm"></i></button>
        <button className="btn btn-primary" type="submit"><i className="bi bi-bucket-fill"></i></button>
        </div>
        </span>

        )
    }
}