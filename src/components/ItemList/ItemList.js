import React, {useState, useEffect} from 'react';
import './ItemList.css'
import { Item } from '../Item/Item.js'

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {id:0, 
                titulo: "Mouse Hyperx Pulsefire Core rgb HX-MC004B", 
                precio:456, 
                img:"../../mouse.png",
                stock: 20,
                alt:'Mouse',
                descripcion:'Mouse marca HyperX'},
                {id:1, 
                titulo: "Teclado Gamer Xtrike-me Gk-979 Qwerty Blue Inglés",
                precio:1340,
                img:"../../screens/img/teclado/teclado.png",
                stock:25,
                alt:'Teclado',
                descripcion:'Teclado marca Xtrike'},
                {id:2,
                titulo: "Placa de Video Evga RTX 3070 XC3 Ultra 8Gb",
                precio:76000,
                img:"../../screens/img/placas-de-video/placa-de-video.png",
                stock:30,
                alt:'Placa de video',
                descripcion:'Placa de video EVGA RTX 3070'},
                {id:3,
                titulo:"Motherboard Gigabyte S1151 H310M M2",
                precio:58000,
                img:"../../screens/img/placas-madre/placa-madre.png",
                stock:35,
                alt:'Motherboard',
                descripcion:'Motherboard marca Gigabyte'},
                {id:4,
                titulo:"Placa de sonido Sound Blaster Audigy FX PCIe 5.1",
                precio:20000,
                img:"../../screens/img/placas-de-sonido/placa-de-sonido.png",
                stock:40,
                alt:'Placa de sonido',
                descripcion:'Placa de sonido marca Sound Blaster'}
            ]
            
            
            ), 2000)
        })
    }

    export const ItemList = () => {
        const [data, setData] = useState([]);
        const recibirItems = () => {
            myPromise().then(dataProductos => {
                setData(dataProductos)
            })
        }
    
        useEffect(() => {
            recibirItems()
        }, [])
    
        return<>
         {data.map((element)=><Item
         key={element.id}
         id={element.id} 
         titulo={element.titulo} 
         descripcion={element.descripcion}
         precio={element.precio}
         img={element.img}  
         stock={element.stock}
         alt={element.alt}
        />)}
        </>
    }