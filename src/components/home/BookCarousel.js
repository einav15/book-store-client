import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Carousel, { consts } from 'react-elastic-carousel'
import { BookStoreContext } from '../../context/BookStoreContext'
import BookItem from '../BookItem'


const BookCarousel = ({ title }) => {
  const { topSellerBooks, newBooks } = useContext(BookStoreContext)
  let books = topSellerBooks
  let link = 'top-sellers'
  if (title === "New Arrivals") {
    books = newBooks
    link = 'new-arrivals'
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 660, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1100, itemsToShow: 5 },
    { width: 1300, itemsToShow: 6 },
  ]

  const myArrow = ({ type, onClick, isEdge }) => {
    const isPrev = type === consts.PREV
    return (
      <button onClick={onClick} disabled={isEdge}>
        <img alt="pointer" src='https://i.ibb.co/LgFHD5d/arrow.png' className={isPrev ? 'flipped-arrow' : 'reg-arrow'} />
      </button>

    )
  }

  return (
    <div className="carousel">
      <h2 className="books-carousel__title">{title}</h2>
      <div className="homepage-item books-carousel__container">
        <Carousel
          renderArrow={myArrow}
          breakPoints={breakPoints}
        >
          {books.map((d) => (
            <BookItem key={d.shortTitle} data={d} />
          ))}
        </Carousel>
      </div>
      <button className="view-all"><Link to={'/' + link}>View All</Link></button>
    </div>
  )
}

export default BookCarousel
