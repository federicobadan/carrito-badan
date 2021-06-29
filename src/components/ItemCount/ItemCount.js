import React, { useState } from 'react';
import './ItemCount.css'


export const ItemCount = (data)=>{
    const {stock, valorInicial, cantidadProducto, onAdd} = data;

    const [count, setCount] = useState(valorInicial > cantidadProducto ? valorInicial : cantidadProducto);

    const handleChangeCount = () => {
        setCount(count+1);
    }
    const handleChangeDiscount = () => {
        setCount(count-1);
    }
    return <>
        <div className='card'>
            <div className='card-buttons'>
                <button  onClick={e => handleChangeDiscount()} 
                        disabled={count === valorInicial ? true : false} 
                        className='btn-modificador'>-</button> 
                <p>{count}</p> 
                <button onClick={e => handleChangeCount()} 
                        disabled={count < stock ? false : true} 
                        className='btn-modificador'>+</button>
            </div>
            <button onClick={() => onAdd(count)}
                    disabled={stock === 0 ? true : false}>Agregar al carrito</button>
        </div>
    </>


}