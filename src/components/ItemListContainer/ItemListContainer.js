import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.js';
import imagen1 from './img/mouse/mouse.png';
import imagen2 from './img/teclado/teclado.png';
import imagen3 from './img/placas-de-video/placa-de-video.png';
import imagen4 from './img/placas-madre/placa-madre.png';
import imagen5 from './img/placas-de-sonido/placa-de-sonido.png'


    const myPromise = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => resolve (
                [
                    {id:0, 
                    titulo: "Mouse Hyperx Pulsefire Core rgb HX-MC004B", 
                    precio:456, 
                    img: `${imagen1}`,
                    stock: 20,
                    alt:'Mouse',
                    descripcion:'Mouse marca HyperX'},
                    {id:1, 
                    titulo: "Teclado Gamer Xtrike-me Gk-979 Qwerty Blue Inglés",
                    precio:1340,
                    img: `${imagen2}`,
                    stock:25,
                    alt:'Teclado',
                    descripcion:'Teclado marca Xtrike'},
                    {id:2,
                    titulo: "Placa de Video Evga RTX 3070 XC3 Ultra 8Gb",
                    precio:76000,
                    img:`${imagen3}`,
                    stock:30,
                    alt:'Placa de video',
                    descripcion:'Placa de video EVGA RTX 3070'},
                    {id:3,
                    titulo:"Motherboard Gigabyte S1151 H310M M2",
                    precio:58000,
                    img: `${imagen4}`,
                    stock:35,
                    alt:'Motherboard',
                    descripcion:'Motherboard marca Gigabyte'},
                    {id:4,
                    titulo:"Placa de sonido Sound Blaster Audigy FX PCIe 5.1",
                    precio:20000,
                    img: `${imagen5}`,
                    stock:40,
                    alt:'Placa de sonido',
                    descripcion:'Placa de sonido marca Sound Blaster'}
                ]
                
                
                ), 2000)
            })
        }
        export const ItemListContainer = () => {
            const [data, setData] = useState([]);
            
            useEffect( () => {
                myPromise()
                .then(response => setData(response))
            }, []);
            return<>
                    <ItemList data={data}/>
                </>
        }
