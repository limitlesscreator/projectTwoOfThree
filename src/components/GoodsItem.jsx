import React, {} from "react";
import s from "./GoodsItem.module.sass"
import {Cart} from "./Cart";

export function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket,
    } = props
    return (
        <>
            <div className={s.itemF} id={id}>
                <div className={s.nameF}>{name}</div>

                <img className={s.imgF} src={full_background} alt={name}/>
                <p className={s.desc}>{description.length > 35 ? description.substr(0, 35) + '...' : description}</p>
                <div className={s.flexBPrice}>
                    <button className={s.button} onClick={() => {
                        addToBasket({id, name, price})
                    }}>Buy
                    </button>
                </div>
                <div className={s.price}>{price}<i className={'fas fa-ruble-sign'}></i></div>
            </div>
        </>
    )
}

// bootstrap class can put in ClassName and then will be work!