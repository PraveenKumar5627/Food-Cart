import { useContext, useEffect, useState } from 'react'
import './cart.css'
import { cartContext } from './App'

export const Cart = () => {
    const {cart}=useContext(cartContext)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.foodPrice),0))
    },[cart])
  
    return (
        <>
            <h1>Cart Product</h1>
            <div className="cart-container">
                <div className="cart-product">
                    {cart.map((prod) => (
                        <>
                            <div className="img">
                                <img src={prod.foodImg} alt="food img" />
                            </div>
                            <div className="cart-product-details">
                                <h3>{prod.foodName}</h3>
                                <p>price rs:{prod.foodPrice}</p>
                            </div>
                        </>
                    )
                    )}
                </div>
            </div>
            <h1>Total amount:{total}</h1>
        </>
    )
}
