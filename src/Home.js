import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className = 'bg-black  min-h-screen max-h-screen min-w-screen max-w-screen flex justify-center items-center flex-col' >
            <h1 className=" text-white  italic text-5xl">TODO APP</h1>
            <p className="italic text-lg text-indigo-500">By: Howard Thomas</p>
            <Link className=" animate-bounce mt-5 p-1 px-2 pb-2 text-white italic text-5xl bg-indigo-500 border-indigo-500 border-1 rounded-full " id = 'home-text' to = '/mainscreen'>GO</Link>
        </div>
    )
}

export default Home