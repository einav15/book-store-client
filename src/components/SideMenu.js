import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SearchForm from './advanced-search/SearchForm'
import { BookStoreContext } from '../context/BookStoreContext'


const SideMenu = ({ isDesktop }) => {
    const { user, dispatchUser, windowSize, location } = useContext(BookStoreContext)

    const onClickLogout = () => {
        dispatchUser({ type: "LOGOUT" })
        alert("Signed out successfully!")
    }
    
    return (
        (!isDesktop || windowSize > 800) &&  !user?.user?.isAdmin &&
        <div className="side-menu" >
            {
                windowSize > 800 && location === '/advanced' && <SearchForm />
            }
            <div className="side-menu__item">
                <h3>Browse</h3>
                <div className="side-menu__options">
                    <NavLink className="side-menu__option" to='/' exact={true} activeClassName="side-menu-active">Home</NavLink>
                    <NavLink className="side-menu__option" to='/top-sellers' activeClassName="side-menu-active">Top Sellers</NavLink>
                    <NavLink className="side-menu__option" to='/new-arrivals' activeClassName="side-menu-active">New Arrivals</NavLink>
                    <NavLink className="side-menu__option" to='/used-books' activeClassName="side-menu-active">Used Books</NavLink>
                    <NavLink className="side-menu__option" to='/advanced' activeClassName="side-menu-active">Advanced Search</NavLink>
                </div>
            </div>
            <div className="side-menu__breaker"></div>
            <div className="side-menu__item">
                <h3>Support</h3>
                <div className="side-menu__options">
                    <NavLink className="side-menu__option" to='/contact' activeClassName="side-menu-active">Contact Us</NavLink>
                    {user === null ?
                        <NavLink className="side-menu__option" to='/login' activeClassName="side-menu-active">Login/Sign-Up</NavLink> :
                        <NavLink className="side-menu__option" to='/' onClick={onClickLogout}>Sign-Out</NavLink>
                    }
                    <NavLink className="side-menu__option" to='/cart' activeClassName="side-menu-active">Your Cart</NavLink>
                    {!!user && <NavLink to="/me" className="side-menu__option" activeClassName="side-menu-active">Your User</NavLink>}
                    {
                        user?.user?.isAdmin ? <NavLink className="side-menu__option" to='/admin' activeClassName="side-menu-active">Administrator</NavLink> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}


export default SideMenu