import React, {useState} from "react";
import s from "./GoodsItem.module.sass"
import stub from "../assets/images/stub.png"

export function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket,
    } = props

    // let element = document.getElementById('img')
    // let hight= element ? element.offsetHeight : 0
    // console.log(hight)

    const [errorsImg, setErrorsImg] = useState(null)

    const errorHandler = (event) => {
        debugger
        setErrorsImg(id)
    }


    return (
        <>
            <div className={s.itemF} id={id}>
                {/*<img src={stub} alt=""/>*/}
                <div className={s.nameF}>{name}</div>
                <img className={s.imgF} // картинка снизу может быть поломаной, если поломаная то, заглушка
                     src={id === errorsImg ? 'https://gamehag.com/img/rewards/background/fortnite---honor-guard-skin_min.jpg' : full_background}
                     alt={name} onError={errorHandler}/>

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