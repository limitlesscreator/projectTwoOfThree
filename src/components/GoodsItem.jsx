import React, {} from "react";
import s from "./GoodsItem.module.sass"
export function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
    } = props
    return (
        <>
        <div className={s.itemF} id={id}>
            <div className={s.nameF}>{name}</div>

            <img className={s.imgF} src={full_background} alt={name}/>
            <p>{description}</p>
            <button>Buy</button>
            <span>{price}</span>
        </div>
        </>
    )
}
// bootstrap class can put in ClassName and then will be work!