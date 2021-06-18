import React from 'react';
import './Item.css'

export const Item = ({ data }) => {
    return<>
        <div className='div-card'>
            <div>
                <img className='img-producto' src={data.img} ></img>
            </div>
            <div>
                <h1>{data.titulo}</h1>
                <p>{data.descripcion}</p>
                <p>Precio: ${data.precio}</p>
                <p>Stock: {data.stock}</p>
                <p>Id: {data.id}</p>
            </div>
        </div>
    </>
}