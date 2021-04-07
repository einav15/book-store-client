import React, { useContext, useEffect } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'
import CartList from './CartList'
import { updateUser } from '../../server/books'

const Cart = () => {
    const { user, location, setLocation } = useContext(BookStoreContext)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    useEffect(() => {
        updateUser(user)
    }, [user])

    return (
        <div className="min-height cart">
            <h2 className="cart-title">Your Cart</h2>
           <CartList />
        </div>
    )
}

export default Cart

