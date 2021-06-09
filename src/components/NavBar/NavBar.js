import React from 'react';
import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget.js'

export const NavBar = ()=>{

    return <>
    <nav className='navbar'>
        <div className='navbar-divlogo'>
            <img id="logo" src='../logo.png' alt='logo'></img>
        </div>
        <div className='navbar-divtexto'>
            <a className='navbar-texto' href='index.html'>Inicio</a>
            <a className='navbar-texto' href='index.html'>Categoria 1</a>
            <a className='navbar-texto' href='index.html'>Categoria 2</a>
            <a className='navbar-texto' href='index.html'>Contacto</a>
        </div>
        <CartWidget />
    </nav>
    </>
}