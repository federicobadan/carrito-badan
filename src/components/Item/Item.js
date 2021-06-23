import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


export const Item = ({ data }) => {
    return<>
        <div className='div-card'>
            <Link className='link' to={'/item/' +data.id}>
                <div className='div-img'>
                    <img className='img-producto' src={data.img} alt={data.alt} ></img>
                </div>
                <div>
                    <h1 className='card-title'>{data.titulo}</h1>
                    <p className='card-text'>Precio: ${data.precio}</p>
                    <p className='card-text'>Stock: {data.stock}</p>
                </div>
            </Link>
        </div>
    </>
}