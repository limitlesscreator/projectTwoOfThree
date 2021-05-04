import React, {} from "react";
import s from './BasketItem.module.sass'

export function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket,
    } = props
    
    return(
        <>
        <div className={s.item}>
        <div className={s.flexItem}>
            {name} x{quantity} = {price*quantity}
            <i className="far fa-times-circle" onClick={() => {removeFromBasket(id)}}></i>
        </div>
        </div>
        </>
    )
}
