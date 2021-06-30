import React from 'react';
import { Link } from 'react-router-dom';

export const FinishPurchaseButton = props =>{
    const {clickCancelar} = props;
    return<div>
            <div >
                <Link 
                    to={'/cart'}>
                    <p className='btn-finish'>Terminar compra</p></Link>
                <button 
                    onClick={() => clickCancelar(false)}>
                    <p className='btn-finish'>Cancelar</p></button>
            </div>
        </div>
}