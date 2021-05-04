import React, {} from "react";
import s from "./Cart.module.sass"
export function Cart(props){
    const {orders = 0,handleBasketShow} = props
    return(
        <>

        <div className={s.cartPosition} onClick={handleBasketShow}>
            <i className="fas fa-shopping-basket"></i>
            {orders ? <span className={s.cartQuantity}>{orders}</span> : null}
        </div>
        </>
    )
}
