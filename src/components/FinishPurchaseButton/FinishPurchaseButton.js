import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export const FinishPurchaseButton = props =>{
    const {clickCancelar} = props;
    const history = useHistory();
    return<div>
            <div >
                <Link onClick={() => history.push(`/cart`)} to={'/cart'}><p className='btn-finish'>Terminar compra</p></Link>
                <Link onClick={() => clickCancelar(false)}><p className='btn-finish'>Cancelar</p></Link>
            </div>
        </div>
}