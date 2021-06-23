import React from 'react';
import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    const perifericos = 'perifericos'
    const componentes = 'componentes'
    return <>
    <nav className='navbar'>
        <div className='navbar-divlogo'>
            <Link to={'/'}><img id="logo" src='../logo.png' alt='logo'></img></Link>
        </div>
        <div className='navbar-divtexto'>
            <Link className='navbar-texto' to={'/'}>Inicio</Link>
            <Link className='navbar-texto' to={'/categoria/' +perifericos}>Periféricos</Link>
            <Link className='navbar-texto' to={'/categoria/' +componentes}>Componentes</Link>
        </div>
        <CartWidget />
    </nav>
    </>
}