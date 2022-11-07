import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import "./db.css"
import image from './error.png'
function Database() {
    return (<>
    <Navbar/>
    <div className='container'>
    <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
        <h1 className='aboutHead'> <strong>Databse Not Found</strong></h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed nostrum nemo quo! Officiis esse dolor reiciendis minus pariatur. Assumenda.
        </div>
    </div>

    </>  );
}

export default Database;