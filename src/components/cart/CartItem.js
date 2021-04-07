import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'
import { url } from '../../index'


const CartItem = ({ book, changeTotal, i, updateUser }) => {
    const { user, dispatchUser } = useContext(BookStoreContext)
    const [totalBookPrice, setTotalBookPrice] = useState(0)
    const [currentBook, setCurrentBook] = useState(book)
    const [amount, setAmount] = useState(book.amount)


    const removeFromCart = (e) => {
        const currentUser = user.user
        const cartFiltered = currentUser?.cart.filter((b) => b.id !== e.target.parentNode.id)
        const updated = { token: user.token, user: { ...currentUser, cart: cartFiltered } }
        dispatchUser({ type: "UPDATE_USER", user: updated })
    }

    const updateTotalPrice = (e) => {
        setAmount(e.target.value)
    }

    const getBook = () => {
        axios.get(`${url}book/${book.id}`)
            .then(res => setCurrentBook(res.data))
            .catch(e => console.log(e))
    }

    const updatePrice = () => {
        const sum = currentBook.price * (1 - currentBook.discount / 100) * amount
        setTotalBookPrice(Math.round(sum * 100) / 100)
        updateUser(amount, i, currentBook)
    }

    useEffect(() => {
        updatePrice()
        getBook()
    }, [amount])

    useEffect(() => {
        const sum = currentBook.price * (1 - currentBook.discount / 100) * amount
        setTotalBookPrice(Math.round(sum * 100) / 100)
    }, [currentBook.price, currentBook.discount, amount])

    useEffect(() => {
       changeTotal(totalBookPrice, i)
    }, [totalBookPrice, i])


    return (
        <form id={currentBook._id} key={currentBook._id} className="cart__item">
            <img src={currentBook.imgSrc} alt={currentBook.title} />
            <div className="book__info cart-item__items">
                <h3>{currentBook.title}</h3>
                <h5>{currentBook.author}</h5>
                <h6>{currentBook.genre}</h6>
            </div>
            <div className="book__price cart-item__items">
                <p className="book-item__header">Book Price</p>
                {currentBook.discount > 0 ?
                    <div className="discounted"><span className="line-through">{'$' + currentBook.price}</span>
                        <span>{'$' + (currentBook.price * (1 - currentBook.discount / 100)).toFixed(2)}</span></div>
                    : '$' + currentBook.price}
            </div>
            <div>
                <p className="book-item__header reduce-margin">Amount</p>
                <input type="number" name="book__amount" className="book__amount" value={amount}
                    min="1" onChange={updateTotalPrice} />
            </div>
            <div>
                <p className="book-item__header">Total</p>
                <span>$<input className="book__total" value={totalBookPrice} disabled={true} /> </span>
            </div>
            <div className="book__delete" onClick={removeFromCart}>X</div>
        </form>
    )
}

export default CartItem




