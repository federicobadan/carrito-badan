import React  from 'react';
import './ItemList.css'
import { Item } from '../Item/Item.js'

export const ItemList = ({ data }) => {
    return<>
        <div className='card-container'>
            {data.map((data)=><Item
                key={data.id}
                data={data} 
            />)}
        </div>
    </>
}