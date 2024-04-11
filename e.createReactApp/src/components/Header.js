import React, {useState, useContext} from "react"
import {Link} from 'react-router-dom'
import UserContext from "../utils.js/userContext"
import {useSelector, useDispatch} from "react-redux"
import { clearCart } from "../utils.js/cartSlice"

const Header = () =>{
    const data = useContext(UserContext)
    console.log("Header log", data);
    const [loginBtnText, setLoginBtnText] = useState('login')
    const cartItems = useSelector((store)=> store.cart.item)
    const dispatch = useDispatch()
    console.log(cartItems)
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    // use
    return (
        <div className="flex justify-between bg-pink-200 h-30 m-2 shadow-lg">
            <div>
                <img className='w-36 h-20' src="https://dcassetcdn.com/design_img/1871193/553897/553897_10142502_1871193_f9aa4fca_image.jpg"/>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4'>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'><Link to='/about'>About Us</Link></li>
                    <li className='px-4'><Link to={'/contact'}>Contact Us</Link></li>
                    <li className='px-4'><Link>Cart - {cartItems.length}</Link></li>
                    <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                    <li className='px-4 cursor-pointer' onClick={()=>handleClearCart()}>ClearCart</li>
                    {
                        data.loggedInUser ?
                            data.loggedInUser
                        : <button className='px-4' onClick={()=>{
                            loginBtnText === 'login' ? setLoginBtnText('logout') : setLoginBtnText('login')
                        }}>{loginBtnText}
                        </button>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;