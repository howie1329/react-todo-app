import {React} from 'react';
import {Link } from 'react-router-dom';
import Todo from './ToDo';

function MainScreen ({todos,remove,edit,body}){

    return(
        <div className =  'bg-black flex flex-col items-center gap-3 min-h-screen '>
            <h1 className =  'text-white font-semibold pt-10 text-3xl'>TODO APP</h1>
            <Link className = 'text-white text-xl border-2 border-solid bg-indigo-500 border-indigo-500 rounded-lg px-10 text-center font-semibold' to = './form'>New Todo?</Link>
            <div className = 'flex flex-col items-center h-full w-full gap-1 '>
                {todos.map((titles,index) => <Todo key = {index} remove = {remove} edit = {edit} index = {index} title = {titles} body = {body[index]}/>)}
            </div>
        </div>
    )
}

export default MainScreen;