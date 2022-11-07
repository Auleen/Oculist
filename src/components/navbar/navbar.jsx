import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
    return ( 
        <div className='Navbar'>
            <div className='Logo'>
                <h1>Oculist 🧿</h1>
            </div>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/report">Report</Link></li>
            <li><Link to="/database">Database</Link></li>
        </ul>
        </nav>
        <a target="_blank" href="https://github.com/Auleen/Oculist"><button>Star ✨</button></a>
        


        </div>
     );
}

export default Navbar;