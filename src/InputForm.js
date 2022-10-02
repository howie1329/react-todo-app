import {React,useState} from "react";
import { Link } from "react-router-dom";
import './InputForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function InputForm({add}){

    const [title,setTitle] = useState();
    const [body,setBody] = useState();

    return(
        <div id = 'form-container'>
            <h2 id = 'form-header'>Please Create A New ToDO</h2>
            <Box>
                <form id = 'form'>
                    <TextField className = 'input-field' required id="outlined-required" label="ToDo Title"  onChange = {(e) => setTitle(e.target.value)}/>
                    <TextField className = 'input-field' required id="outlined-required" label="ToDo Description" onChange = {(e) => setBody(e.target.value)}/>
                    <Stack spacing={2} direction = 'column'>
                        <Button fullWidth = {true} variant = 'contained' type = 'submit' value = 'Submit' onClick = {(e) => add(e,title,body)}>Submit</Button>
                        <Link id = 'links' to = '/mainscreen'><Button fullWidth = {true} variant = 'contained'> Main Screen</Button></Link>
                    </Stack>
                    
                </form>
            </Box>
            
        </div>
    )
}

export default InputForm;