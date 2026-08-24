import { Link } from "react-router-dom"
import './Header.css'
export const Header = ({cart}) => {
    console.log(cart)
    return (
        <>
            <div className="navbar"><div className="logo">Food Cart</div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>

                    </li>
                    <li>
                        <Link to={"/Cart"}> <span>{cart.length}</span>Cart</Link>

                    </li>
                </ul></div>
        </>
    )
}
