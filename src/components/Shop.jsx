import React, {useState, useEffect} from "react";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {API_KEY, API_URL} from "../config";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true)

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
            })
    }, []);

    return (
        <>
            <div>
                {loading ? <Preloader/> : <GoodsList goods={goods}/>}
            </div>
        </>
    )
}
