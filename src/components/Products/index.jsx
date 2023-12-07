import React, { useEffect, useState } from 'react'

import "../Products/product.scss"

const Product = () => {
    const [data, setdata] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const api = await response.json();
            setdata(api);
        }
        fetchData();
    }, []);

    console.log(data);
    return (
        <div>
            {data.map(x => {
                return <h1 key={x.id}>{x.name}</h1>
            })}
        </div>
    )
}

export default Product
