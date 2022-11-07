import React from 'react';
import './about.css'
import image from './oculist_3.jpg'
import {Link} from "react-router-dom"

function About() {
    return ( 
    <>
    <div className='container'>
        <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
        <h1 className='aboutHead'> <strong>Some Good Title For The Project</strong></h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed nostrum nemo quo! Officiis esse dolor reiciendis minus pariatur. Assumenda.
        </div>
    </div>
    <div className='buttonTab'>
        <Link to="/database">    
        <button className='btnAbt'>
            Search in Database 🔎
        </button>
        </Link>
    
        <Link to="/report">    
        <button className='btnAbt'>
            Generate Report🔎
        </button>
        </Link>
    </div>
    </> 
    );
}

export default About;