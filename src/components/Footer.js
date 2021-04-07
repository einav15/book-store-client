import React, { useContext } from 'react'
import { BookStoreContext } from '../context/BookStoreContext'

const Footer = () => {
    const { user } = useContext(BookStoreContext)
    return (
        !user?.user?.isAdmin &&
        <div className="footer">
            <div className="links" >
                <div className="links__col">
                    <h3>Shop</h3>
                    <p>Gift Cards</p>
                    <p>Reviews</p>
                    <p>Deals & Discounts</p>
                </div>
                <div className="links__col">
                    <h3>Support</h3>
                    <p>Orders</p>
                    <p>Shipping</p>
                    <p>Return Policy</p>
                    <p>Payements</p>
                    <p>Support Center</p>
                </div>
                <div className="links__col">
                    <h3>About Us</h3>
                    <p>History</p>
                    <p>Blog</p>
                    <p>Locations</p>
                    <p>Careers</p>
                </div>
            </div>
        <img alt="Social" src="https://raw.githubusercontent.com/einav15/HackerU/master/img/social.png" />
        </div>
    )
}

export default Footer
