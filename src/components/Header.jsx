import React, {} from "react";
import s from "./Header.module.sass"

export function Header() {

    return (
        <>
            <header>
                <i className="fab fa-foursquare"></i>
                {"ORTNITE "}
                <span className={s.leftMore}>
                    <i className="fab fa-stripe-s"></i>HOP</span>
            </header>
        </>
    )
}
