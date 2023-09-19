import React from "react"

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://dcassetcdn.com/design_img/1871193/553897/553897_10142502_1871193_f9aa4fca_image.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;