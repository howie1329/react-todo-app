import {React,useState} from "react";
import { Link } from "react-router-dom";
import './InputForm.css'

function InputForm({add}){

    const [title,setTitle] = useState();
    const [body,setBody] = useState();

    return(
        <div id = 'form-container'>
            <h2 id = 'form-header'>Please Create A New ToDO</h2>
            <form id = 'form'>
                <label id = 'label'>What Is Your New Todo</label>
                <input  id = 'input' type = 'text' onChange = {(e) => setTitle(e.target.value)}></input>
                <label id = 'label'>Give Your Todo A Description</label>
                <input id = 'input' type = 'text' onChange = {(e) => setBody(e.target.value)}></input>
                <button type = 'submit' value = 'Submit' onClick = {(e) => add(e,title,body)}>Submit</button>
                <Link to = '/mainscreen'><button id = 'back-button' >Main Screen</button></Link>
            </form>
            
        </div>
    )
}

export default InputForm;