import React from 'react'
import axios from 'axios'
import { url } from '../../index'
import { useHistory } from 'react-router'

const EditBook = ({ book, open, close }) => {

    const history = useHistory()

    const submitEditBook = (e) => {
        e.preventDefault()
        const form = e.target
        const body = {
            title: form.title.value,
            shortTitle: form.short.value,
            imgSrc: form.img.value,
            author: form.author.value,
            genre: form.genre.value,
            price: form.price.value,
            isNewArrival: form.new.value,
            isTopSeller: form.top.value,
            discount: form.discount.value,
            description: form.description.value,
        }
        axios.patch(`${url}book/${book._id}`, body, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => {
            alert('Book Edited!')
            close()
        })
    }

    const removeBook = () => {
        const body = { _id: book._id }
        axios.delete(`${url}books`, { data: body }, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                alert("Book deleted!")
                close()
                history.push('/admin')
            })
            .catch(e => console.log(e))
    }

    return (
        open &&
        <>
            <div onClick={close} className="edit-book__background"></div>
            <div className="edit-book">
                <h2>Edit Book</h2>
                <span className="book__delete exit-btn" onClick={close}>X</span>
                <form onSubmit={submitEditBook}>
                    <div className="edit-book__property"><p>Title: </p><input placeholder="Title" name="title" required={true} defaultValue={book.title} /></div>
                    <div className="edit-book__property"><p>Short Title: </p><input placeholder="Short Title" name="short" required={true} defaultValue={book.shortTitle} /></div>
                    <div className="edit-book__property"><p>Author: </p> <input placeholder="Author" name="author" required={true} defaultValue={book.author} /></div>
                    <div className="edit-book__property"><p>Genre: </p><select name="genre" defaultValue={book.genre}>
                        <option value="Advantures">Adventures</option>
                        <option value="Biography">Biography</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                    </select></div>
                    <div className="edit-book__property"><p>Price: </p><input type="number" step="0.01" placeholder="Price" name="price" required={true} defaultValue={book.price} /></div>
                    <div className="edit-book__property"><p>Img Src: </p><input placeholder="Image Source" name="img" required={true} defaultValue={book.imgSrc} /> </div>
                    <div className="edit-book__property"><p>Discount %: </p><input type="number" placeholder="Discount %" name="discount" required={true} defaultValue={book.discount} /></div>
                    <div className="edit-book__property-radio">
                        <p className="radio-title">New Book: </p>
                        <div>
                            <input type="radio" name="new" value="true" defaultChecked={book.isNewArrival} />
                            <label htmlFor="true">Yes</label>
                        </div>
                        <div>
                            <input type="radio" name="new" value="false" defaultChecked={!book.isNewArrival} />
                            <label htmlFor="false">No</label>
                        </div>
                    </div>
                    <div className="edit-book__property-radio">
                        <p className="radio-title">Top Seller: </p>
                        <div>
                            <input type="radio" name="top" value="true" defaultChecked={book.isTopSeller} />
                            <label htmlFor="true">Yes</label>
                        </div>
                        <div>
                            <input type="radio" name="top" value="false" defaultChecked={!book.isTopSeller} />
                            <label htmlFor="false">No</label>
                        </div>
                    </div>
                    <div className="edit-book__property"><p>Description: </p> <textarea placeholder="Description" name="description" defaultValue={book.description} /></div>
                    <button className="reg-button edit" type="submit">Edit</button>
                </form>
                <button className="reg-button remove" onClick={removeBook}>Remove Book</button>
            </div>
        </>
    )
}

export default EditBook