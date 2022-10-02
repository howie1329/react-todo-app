import {React} from 'react';
import {Link } from 'react-router-dom';
import './MainScreen.css'
import Todo from './ToDo';

function MainScreen ({todos,remove,edit,body}){

    return(
        <div id = 'main-screen'>
            <h1 id = 'main-header'>TODO APP</h1>
            <Link id = 'form-title' to = './form'>New Todo?</Link>
            <div id = 'todo-container'>
                {todos.map((titles,index) => <Todo key = {index} remove = {remove} edit = {edit} index = {index} title = {titles} body = {body[index]}/>)}
            </div>
        </div>
    )
}

export default MainScreen;