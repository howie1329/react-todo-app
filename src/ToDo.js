import React from "react";
import './Todo.css'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

function Todo({title,body,remove,index,edit}){
    return(
        <div id = 'todo-card'>
            <h3 id = 'todo-header'>{title}</h3>
            <p id = 'todo-body'>{body}</p>
            <div id = 'button-container'>
                <ButtonGroup variant = 'contained' size = 'small'>
                    <Button startIcon = {<EditIcon/>} onClick = {() => edit(index)}>Edit</Button>
                    <Button startIcon = {<DeleteIcon/>} onClick = {() => remove(index)}>Delete</Button>
                </ButtonGroup>
            </div>
            
        </div>
    )
}

export default Todo;