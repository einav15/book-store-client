import React from 'react'
import { Link } from 'react-router-dom'

const preventDef = (e) => e.preventDefault();

const BookItem = ({ data }) => {
    const book = data
    return (
        <div className="book__container">
            <Link to={'/book/' + book._id} book={book} className="no-decoration-link">
                <div className="book-item__container">
                    <div className="book__image">
                        <img alt={data.title} src={data.imgSrc} onDragStart={preventDef} />
                        {
                            data.isTopSeller ? <div className="top-seller__label">Top Seller!</div> :
                                <div className="top-seller__label opacity0">Top Seller!</div>
                        }
                        {
                            data.isNewArrival ? <div className="new-arrival__label">New!</div> :
                                <div className="new-arrival__label opacity0">New!</div>
                        }
                        {data.discount > 0 && <div className="sale__label">Sale!</div>}
                    </div>
                    <h3>{data.shortTitle}</h3>
                    <p>{'By: ' + data.author}</p>
                    <p>{'Genre: ' + data.genre}</p>
                </div>
                <button className="see-more">See More</button>
            </Link>
        </div>

    )
}

export default BookItem


