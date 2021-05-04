import React, {useState, useEffect} from "react";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {API_KEY, API_URL} from "../config";
import {Cart} from "./Cart";
import s from "./Shop.module.sass"
import {BasketList} from "./BasketList";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id) //если findIndex ничего не находит, то возвращает -1
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order,newItem])
        }
        else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }

        // event loop
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
        console.log('remove')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                data.featured && setGoods(data.featured);
                setLoading(false)
                console.log('finish')
            })
    }, []);

    return (
        <>
            <div className={s.positionFromCart}>
                <Cart orders={order.length} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket}/>
                {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
            </div>
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} />
            }
        </>
    )
}
