import React, {} from "react";
import {GoodsItem} from "./GoodsItem";
import s from './GoodsList.module.sass'
import {Cart} from "./Cart";

export function GoodsList(props) {
    const {goods = []} = props
    console.log(goods)
    if (!goods.length) {
        return (
            <>
                Nothing here
            </>
        )
    }
    return (
        <>
            <div className={s.itemsF}>
                {goods.map((item) => (<GoodsItem key={item.id} {...item} addToBasket={props.addToBasket}/>))}
            </div>
        </>
    )

}
