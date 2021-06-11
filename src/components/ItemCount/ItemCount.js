import React, {useState} from 'react';
import './ItemCount.css'


export const ItemCount = ()=>{
    const [contador, setContador] = useState(0);
    const [stock, setStock] = useState(25)
    function sumar (){
        setContador(contador + 1);
        setStock(stock - 1);       
        
    }
    function restar () {
        setContador(contador - 1);
        setStock(stock + 1);
    }
    return <>
        <div className='card'>
            <h1 className='card-title'>Camisa</h1>
            <p>Stock: {stock}</p>
            <div className='card-buttons'>
                <button disabled={contador===0} onClick={e => restar()} className='btn-modificador'>-</button> <p>{contador}</p> <button disabled={!stock>0} onClick={e => sumar()} className='btn-modificador'>+</button>
            </div>
            <button disabled={contador===0} className='btn-agregar'>Agregar al carrito</button>
        </div>
    </>


}