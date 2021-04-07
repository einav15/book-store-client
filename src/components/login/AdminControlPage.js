import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import LoginForm from './LoginForm'
import { BookStoreContext } from '../../context/BookStoreContext'
import { url } from "../../index"
import EditBook from './EditBook'

const AdminControlPage = () => {
    const { admin, dispatchAdmin, setLocation } = useContext(BookStoreContext)
    const [adminSearchedBooks, setAdminSearchedBooks] = useState([])
    const [openEditBook, setOpenEditBook] = useState(false)
    const [book, setBook] = useState({})



    useEffect(() => {
        setLocation(window.location.pathname)
    }, [setLocation])

    const bookSearch = async (e) => {
        const title = e.target.value
        if (title === '')
            return
        await axios.get(`${url}books/advanced?title=${title}&price=0,1000`)
            .then(res => {
                setAdminSearchedBooks(res.data)
            }).catch(e => console.log(e))
    }

    const addNewBook = (e) => {
        e.preventDefault()
        const form = e.target
        const body = {
            title: form.title.value,
            shortTitle: form.short.value,
            imgSrc: form.img.value,
            author: form.author.value,
            genre: form.genre.value,
            price: form.price.value,
            isNewArrival: true,
            discount: form.discount.value,
            description: form.description.value
        }
        axios.post(`${url}books`, body, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => {
            alert('Book Added!')
            form.reset()
        })

    }

    const onClickLogout = () => {
        dispatchAdmin({ type: "LOGOUT" })
        alert("Signed out successfully!")
    }
    
    const editBook = () => {
        setOpenEditBook(true)
    }

    const close = () => {
        setOpenEditBook(false)
        setBook(null)
    }

    return (
        admin ?
            <div>
                <EditBook book={book} open={openEditBook} close={close} />
                <NavLink className="logout-button" to='/' onClick={onClickLogout}>Sign-Out</NavLink>
                <div className="admin-page">
                    <div className="admin-page__box">
                        <h3>Change book details:</h3>
                        <input placeholder="Book Title" onChange={bookSearch} />
                        {adminSearchedBooks && adminSearchedBooks.map((b) =>
                            <div key={b._id} onClick={()=>{
                                setBook(b)
                                editBook()
                            }}>
                                <h5>{b.shortTitle}</h5>
                            </div>
                        )}
                    </div>
                    <div className="admin-page__box">
                        <h3>Add a new book:</h3>
                        <form onSubmit={addNewBook}>
                            <input placeholder="Title" name="title" required={true} />
                            <input placeholder="Short Title" name="short" required={true} />
                            <input placeholder="Author" name="author" required={true} />
                            <select name="genre">
                                <option value="Advantures">Adventures</option>
                                <option value="Biography">Biography</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                            <input type="number" step="0.01" placeholder="Price" name="price" required={true} />
                            <input placeholder="Image Source" name="img" required={true} />
                            <input type="number" placeholder="Discount %" name="discount" required={true} />
                            <textarea placeholder="Description" name="description" />
                            <button type="submit" className="reg-button">Add</button>
                        </form>
                    </div>

                </div>
            </div>
            :
            <LoginForm adminLogin={true}/>
    )
}

export default AdminControlPage