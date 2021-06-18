import React  from 'react';
import './ItemList.css'
import { Item } from '../Item/Item.js'

export const ItemList = ({ data }) => {
    return<>
            <div>
                {data.map((data)=><Item
                key={data.id}
                data={data} 
                />)}
            </div>
            </>
}