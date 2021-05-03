import React, {} from "react";
import s from './BasketItem.module.sass'

export function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
    } = props
    
    return(
        <>
        <div className={s.item}>

            {name} x{quantity} = {price}
           <i className="far fa-times-circle"></i>
        </div>
        </>
    )
}
