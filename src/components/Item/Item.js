import React from 'react';
import './Item.css'

export const Item = props => {

    const {id, titulo, precio, descripcion, img, stock, alt} = props;
    return<>
        <div className='div-card'>
            <div>
                <img className='img-producto' src={img} alt={alt}></img>
            </div>
            <div>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                <p>Stock: {stock}</p>
                <p>Id: {id}</p>
            </div>
        </div>
    </>
}