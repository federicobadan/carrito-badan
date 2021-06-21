import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail.js';
import imagen1 from './img/placa-de-video.png';



    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => resolve (
                    {id:0, 
                    titulo: "Tarjeta de video Gigabyte NVIDIA GeForce GT 710, 1GB DDR3", 
                    precio:52350, 
                    img: `${imagen1}`,
                    stock: 20,
                    alt:'Placa de video',
                    descripcion:'Tarjeta de video marca NVIDIA modelo GeForce GT710. 1gb de VRAM DDR3 para poder disfrutar de tus juegos en mejor calidad'}
                ), 2000)
            })
        }
        export const ItemDetailContainer = () => {
            const [data, setData] = useState([]);
            
            useEffect( () => {
                getItems()
                .then(response => setData(response))
            }, []);
            return<>
                    <ItemDetail data={data}/>
                </>
        }
