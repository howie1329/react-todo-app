import React from "react";
import {Link} from "react-router-dom";
import './Home.css'

function Home(){
    return(
        <div id = 'home-container'>
            <Link id = 'home-text' to = '/mainscreen'>ToDO App</Link>
        </div>
    )
}

export default Home