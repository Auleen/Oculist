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
        <h1 className='aboutHead'> <strong>Revolutionizing Diabetic Eye Care</strong></h1>
        Oculist enables you to calculate your personalized risk of sight-threatening diabetic retinopathy, which is one of the leading causes of blindness in the world. Vision loss due to diabetes can be prevented in 90% of cases with early detection, timely treatment and preventive lifestyle changes. RetinaRisk can play a instrumental role in early detection by calculating the risk of diabetic eye disease and allowing users to understand which are the key underlying risk factors and which lifestyle changes can lower the risk.
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