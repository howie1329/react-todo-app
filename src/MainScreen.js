import {React} from 'react';
import {Link } from 'react-router-dom';
import Todo from './ToDo';
import {PlusIcon} from '@heroicons/react/20/solid'

function MainScreen ({todos,idData,remove,edit}){

    return(
        <div className =  'bg-black flex flex-col items-center gap-3 min-h-screen '>
            <h1 className =  'text-white font-semibold pt-10 text-3xl'>TODO APP</h1>
            <Link className = ' flex justify-center items-center text-white text-xl border-2 border-solid bg-indigo-500 border-indigo-500 rounded-lg px-10 text-center font-semibold' to = './form'><PlusIcon className = 'w-7 h-7'/>New Todo?</Link>
            <div className = 'flex flex-col items-center h-full w-full gap-1 '>
                {todos.map((content,index) => <Todo key = {index} remove = {remove} edit = {edit} idData = {idData}index = {index} title = {content['Title']} body = {content['Body']}/>)}
            </div>
        </div>
    )
}

export default MainScreen;