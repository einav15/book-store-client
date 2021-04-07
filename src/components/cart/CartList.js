import React, { useContext, useEffect, useState, useReducer } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'
import CartReducer from '../../reducers/CartReducer'
import CartItem from './CartItem'


const CartList = () => {
    const { user, dispatchUser } = useContext(BookStoreContext)
    const [booksPrices, setBooksPrices] = useReducer(CartReducer, [])
    const [total, setTotal] = useState(0)

    const updateUser = (amount, i, currentBook) => {
        const currentUser = user.user
        const cartUpdated = [...currentUser.cart]
        if (amount !== currentBook.amount) {
            for (let j = 0; j < cartUpdated.length; j++) {
                if (cartUpdated[j].id === currentBook._id) {
                    cartUpdated[j].amount = (Number)(amount)
                }
            }
            const updated = { token: user.token, user: { ...currentUser, cart: cartUpdated } }
            // console.log(updated.user.cart)
            dispatchUser({ type: "UPDATE_USER", user: updated })
        }
    }

    const changeTotal = (price, index) => {
        setBooksPrices({ type: "CHANGE", index, price })
    }

    const ResetTotal = () => {
        alert("Thank you for your purchase! Your total is $" + total)
        const currentUser = user?.user
        const updated = { token: user.token, user: { ...currentUser, cart: [] } }
        dispatchUser({ type: "UPDATE_USER", user: updated })
    }

    useEffect(() => {
        let priceTotal = 0
        for (let i = 0; i < booksPrices.length; i++) {
            priceTotal += booksPrices[i]
        }
        setTotal(priceTotal)
    }, [booksPrices])

    return (
        <div>
            {user?.user.cart.map((book, i) => {
                return <CartItem key={book.id} book={book} changeTotal={changeTotal} i={i} updateUser={updateUser} />
            }
            )}
            <div className="total-price">
                <div className="total-price__container">
                    {total > 0 ? <>
                        <h5>Your Total: ${total.toFixed(2)}</h5>
                        <div id="purchase-btn" onClick={ResetTotal}>Purchase!</div>
                    </> :
                        <div>No books in your cart yet!</div>
                    }
                </div>
            </div>

        </div>
    )
}

export default CartList

