import React, {} from "react";
import s from './BasketItem.module.sass'

export function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket,
        addQuantity,
        removeQuantity,
    } = props

    return (
        <>
            <div className={s.item}>
                <div className={s.flexItem}>
                    <div className={s.nameQPrice}>{name} x{quantity} = {price * quantity}</div>
                    <div className={s.buttons}>
                        <button className={s.button} onClick={ () => {addQuantity(id)}}>+</button>
                        <button className={s.button} onClick={ () => {removeQuantity(id)}}>-</button></div>

                    <i className="far fa-times-circle" onClick={() => {
                        removeFromBasket(id)
                    }}></i>
                </div>
            </div>
        </>
    )
}
