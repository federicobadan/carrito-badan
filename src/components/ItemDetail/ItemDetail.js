import React from 'react';
import './ItemDetail.css'

export const ItemDetail = ({ data }) => {
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
        </div>
    </>
}