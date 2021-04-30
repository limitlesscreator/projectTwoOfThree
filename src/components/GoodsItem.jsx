import React, {} from "react";

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
        <div id={id}>
            <div>{name}</div>

            <img src={full_background} alt={name}/>
            <p>{description}</p>
            <button>Buy</button>
            <span>{price}</span>
        </div>
        </>
    )
}
// bootstrap class can put in ClassName and then will be work!