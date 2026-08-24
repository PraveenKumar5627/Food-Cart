import { useContext } from 'react'
import './Product.css'
import { cartContext } from './App'
export const Product = ({ product}) => {
    function addCart() {
        setCart([...cart, product])
    }
    function removeCart() {
        setCart(cart.filter((c) => c.id !== product.id))
    }
    const {cart,setCart}=useContext(cartContext)
    return (
        <>
            <div className="product">
                <div className="img">
                    <img src={product.foodImg} alt="" />

                </div>
                <div className="details">
                    <h3>{product.foodName}</h3>
                    <p>Price Rs:{product.foodPrice}</p>
                    {cart.includes(product) ? (<button className='btn' onClick={removeCart}>Remove from Cart</button>) : <button onClick={addCart}>Add to Cart</button>}
                </div>
            </div>
        </>

    )
}
