import {React,useState} from "react";
import { Link } from "react-router-dom";
import {PlusIcon,BackwardIcon} from '@heroicons/react/20/solid'

function InputForm({add}){

    const [title,setTitle] = useState();
    const [body,setBody] = useState();

    return(
        <div className=" bg-black flex flex-col min-w-screen min-h-screen items-center" >
            <h2 className="text-white text-xl mt-[140px] mb-[10px] font-semibold underline">Please Create A New Todo</h2>
            <form className=" text-white flex flex-col items-center min-h-full min-w-full">
                <label className="font-medium">What Is The Name Of Your Todo?</label>
                <input className=" text-black border-2 border-black border-solid min-w-[70%] rounded-lg" type = 'text' onChange = {(e) => setTitle(e.target.value)}></input>
                <label className = 'font-medium'>Give Your Todo A Description:</label>
                <input className=" text-black border-2 border-black border-solid min-w-[70%] rounded-lg" type = 'text' onChange = {(e) => setBody(e.target.value)}></input>
                <button className = ' flex justify-center items-center font-semibold w-1/3  border-2 bg-indigo-500 border-indigo-500 border-solid rounded text-center my-2' type = 'submit' value = 'Submit' onClick = {(e) => add(e,title,body)}><PlusIcon className = 'w-7 h-7'/>Submit</button>
                <Link className = ' flex justify-center font-semibold w-1/3  border-2 bg-indigo-500 border-indigo-500 border-solid rounded text-center' to = '/mainscreen'><button className = 'flex justify-center items-center'><BackwardIcon className = 'w-7 h-7 mr-1'/>Back</button></Link>
            </form>
            
        </div>
    )
}

export default InputForm;