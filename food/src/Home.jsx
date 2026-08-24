
import { useState } from 'react'
import datas from './datas.json'
import { Product } from './Product'
import './home.css'
export const Home = () => {
    console.log(datas)
    return (
        <>
            <div className="product-container">
                {datas.map((products) => <Product product={products}/>
                )}
            </div>
        </>
    )
}
