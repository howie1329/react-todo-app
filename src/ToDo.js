import React from "react";
import './Todo.css'

function Todo({title,body,remove,index,edit}){
    return(
        <div id = 'todo-card'>
            <h3 id = 'todo-header'>{title}</h3>
            <p id = 'todo-body'>{body}</p>
            <div id = 'button-container'>
                <button id = 'button' onClick = {() => edit(index)}>Edit</button>
                <button id = 'button' onClick = {() => remove(index)}>Delete</button>
            </div>
            
        </div>
    )
}

export default Todo;