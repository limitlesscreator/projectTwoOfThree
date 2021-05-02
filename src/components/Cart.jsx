import React, {} from "react";
import s from "./Cart.module.sass"
export function Cart(props){
    const {quantity = 0} = props
    return(
        <>
        <div className={s.cartPosition}>
            <i className="fas fa-shopping-basket"></i>
            {quantity ? <span className={s.cartQuantity}>{quantity}</span> : null}
        </div>
        </>
    )
}
