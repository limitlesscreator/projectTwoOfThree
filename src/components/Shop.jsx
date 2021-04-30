import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";

export function Shop(){
    const [goods,setGoods] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect( function getGoods(){
    fetch(API_URL, {
        headers: {
            "Authorization": API_KEY
        }
    }).then(response => response.json())
        .then(data => {data.featured && setGoods(data.featured)
            setLoading(false)
        })
    }, []);
    
    return(
        <>
            {loading ? <Preloader/> :         <main>shop</main>
            }
        </>
    )
}
