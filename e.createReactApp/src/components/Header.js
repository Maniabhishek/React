import React, {useState} from "react"
import {Link} from 'react-router-dom'

const Header = () =>{
    const [loginBtnText, setLoginBtnText] = useState('login')
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://dcassetcdn.com/design_img/1871193/553897/553897_10142502_1871193_f9aa4fca_image.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link>Cart</Link></li>
                    <button className='login-btn' onClick={()=>{
                            loginBtnText === 'login' ? setLoginBtnText('logout') : setLoginBtnText('login')
                        }}>{loginBtnText}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;