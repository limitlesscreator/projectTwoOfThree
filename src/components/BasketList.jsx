import React, {} from "react";
import {BasketItem} from "./BasketItem";
import s from './BasketList.module.sass'

export function BasketList(props) {
    const {order,handleBasketShow,removeFromBasket,addQuantity,removeQuantity} = props

    const totalPrice = order.reduce((sum, el) => {
        console.log(sum)
        return sum + el.price * el.quantity
    }, 0)

    return (
        <div className={s.mainList}>
            <span onClick={() => {handleBasketShow()}}><i className="fas fa-window-close"></i></span>
            <div className={s.basket}>Корзина</div>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
                )) : <div className={s.basketEmpty}>Корзина пуста</div>
            }
            {order.length ? <div className={s.allPrice}>{totalPrice} <i className={'fas fa-ruble-sign'}></i></div> : null}
        </div>
    )
}
