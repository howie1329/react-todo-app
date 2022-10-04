import React from "react";


function Todo({title,body,remove,index,edit}){
    return(
        <div className="bg-white flex flex-col justify-center border-2 border-black border-solid rounded-3xl min-w-[90%] max-w-[90%] min-h-fit p-1" id = 'todo-card'>
            <h3 className=" font-semibold text-2xl underline text-center" id = 'todo-header'>{title}</h3>
            <p className=" font-medium italic text-lg text-center" id = 'todo-body'>{body}</p>
            <div className="flex justify-evenly">
                <button className = 'font-semibold w-1/3  border-2 bg-indigo-300 border-indigo-300 border-solid rounded' id = 'button' onClick = {() => edit(index)}><img src = './assets/edit.svg'> Edit </button>
                <button className = 'font-semibold w-1/3  border-2 bg-indigo-300 border-indigo-300 border-solid rounded' id = 'button' onClick = {() => remove(index)}>Delete</button>
            </div>
            
        </div>
    )
}

export default Todo;