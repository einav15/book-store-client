import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookStoreContext } from '../../context/BookStoreContext'

const MenuBar = () => {
    const { user, dispatchUser } = useContext(BookStoreContext)
    const onClickLogout = () => {
        dispatchUser({type: "LOGOUT"})
        alert("Signed out successfully!")
    }

    return (
        <div className="menu-bar">
            <div>
                <Link to="/" className="menu-bar__option"><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/home.png" alt="home" />Home</Link>
                <Link to="/contact" className="menu-bar__option"><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/mail.png" alt="contact" />Contact Us</Link>
                <Link to="/advanced" className="menu-bar__option"><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/zoom.png" alt="advanced" />Advanced Search</Link>
            </div>
            <div>
            {user === null ?
                    <span></span> :
                    <Link to="/me" className="menu-bar__option" id="user-btn"><img src="https://www.pngfind.com/pngs/b/470-4703547_privacy-icon-png.png" alt="me" />{user.user.username}</Link>
                }
                {user === null ?
                    <Link to="/login" className="menu-bar__option" id="sign-in-btn"><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/sign-in.png" alt="sign-in" />Sign in/Sign up</Link> :
                    <Link to="/" className="menu-bar__option" id="sign-in-btn" onClick={onClickLogout}><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/sign-in.png" alt="logout" />Sign-Out</Link>
                }
                <Link to="/cart" className="menu-bar__option"><img src="https://raw.githubusercontent.com/einav15/HackerU/master/img/cart.png" alt="cart" />Cart</Link>
            </div>
        </div>
    )
}

export default MenuBar
