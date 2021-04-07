import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { url } from '../index'
import { BookStoreContext } from '../context/BookStoreContext'
import { updateUser } from '../server/books'

const BookPage = (props) => {
    const [book, setBook] = useState({})
    const history = useHistory();

    const getBook = async ()=> {
        await axios.get(url + props.location.pathname.substring(1))
        .then(res => setBook(res.data))
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getBook()
    }, [])

    const { user, dispatchUser, location, setLocation } = useContext(BookStoreContext)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    useEffect(() => {
        updateUser(user)
    }, [user])

    const addToCart = () => {
        const currentUser = user?.user
        if (!currentUser)
            return history.push('/login')

        const cartFiltered = [...currentUser.cart.filter((b) => b._id !== book._id)]
        cartFiltered.push({ id: book._id, amount: 1 })
        const updated = { token: user.token, user: { ...currentUser, cart: cartFiltered } }
        dispatchUser({ type: "UPDATE_USER", user: updated })
        alert("added to cart")
    }

    return (
        <>
            <div id="book-page" className="min-height">
                <div className="book-page__info">
                    <div className="book__image">
                        <img alt={book.title} src={book.imgSrc} />
                        {
                            book.isTopSeller ? <div className="top-seller__label">Top Seller!</div> :
                                <div className="top-seller__label opacity0">Top Seller!</div>
                        }
                        {
                            book.isNewArrival ? <div className="new-arrival__label">New!</div> :
                                <div className="new-arrival__label opacity0">New!</div>
                        }
                        {book.discount > 0 && <div className="sale__label">Sale!</div>}
                    </div>
                    <div className="book__info">
                        <h1 className="margin-bottom">{book.title}</h1>
                        <h5>{book.author}</h5>
                        <h6 className="margin-bottom">Genre: {book.genre}</h6>
                        <h4 className="margin-bottom"><span>Price:</span>{book.discount > 0 ?
                            <div className="discounted"><span className="line-through">{'$' + book.price}</span>
                                <span className="discount">{'$' + parseFloat(book.price * (1 - book.discount / 100)).toFixed(2)}</span></div> : '$' + book.price}
                        </h4>
                        <button onClick={addToCart}>Add to Cart!</button>
                    </div>
                </div>
                <p>{book.description}</p>

            </div>
        </>
    )
}

export default BookPage