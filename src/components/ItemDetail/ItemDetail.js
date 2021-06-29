import React, { useState } from 'react';
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount.js';
import {FinishPurchaseButton} from '../FinishPurchaseButton/FinishPurchaseButton.js'

export const ItemDetail = ({ data }) => {
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [click, setClick] = useState(false)

    const onAdd = cantidad => {
        setCantidadProducto(cantidad); 
        setClick(true); 
    }

    const clickCancelar = cl =>{
        setClick(false);
    }
    return<>
        <div className='div-card-detail'>
            <div className='img-div'>
                <img className='img-detail' src={data.img} alt={data.alt}></img>
            </div>
            <div>
                <h1 className='detail-title'>{data.titulo}</h1>
                <p className='detail-description'>{data.descripcion}</p>
                <div className='detail-div'>
                    <p className='detail-text'>Precio: ${data.precio}</p>
                    <p className='detail-text'>Stock: {data.stock}</p>
                </div>
            </div>
            <div className='div-counter'>
                {
                    click ? 
                    <FinishPurchaseButton clickCancelar={clickCancelar}/>
                    :
                    <ItemCount stock={data.stock} valorInicial={1}  cantidadProducto={cantidadProducto} onAdd={onAdd}/>
                }
            </div>
        </div>
    </>
}