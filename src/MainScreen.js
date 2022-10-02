import {React} from 'react';
import {Link } from 'react-router-dom';
import './MainScreen.css'
import Todo from './ToDo';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

function MainScreen ({todos,remove,edit,body}){

    return(
        <div id = 'main-screen'>
            <h1 id = 'main-header'>TODO APP</h1>
            <Link id = 'form-title' to = './form'>
                    <Button variant = 'contained' startIcon = {<AddIcon/>}>New Todo</Button>
            </Link>
            <div id = 'todo-container'>
                {todos.map((titles,index) => 
                <Card id = 'card'key = {index} variant="outlined">
                    <CardContent key = {index}>
                        <Todo key = {index} remove = {remove} edit = {edit} index = {index} title = {titles} body = {body[index]}/>
                    </CardContent>
                </Card>)}
            </div>
        </div>
    )
}

export default MainScreen;