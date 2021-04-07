import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { BookStoreContext } from '../../context/BookStoreContext'
import BookCarousel from './BookCarousel'
import MovingBanner from './MovingBanner'
import Ad from './Ad'
import { url } from '../../index'
import { Redirect } from 'react-router'


const HomePage = () => {
    const { admin, newBooks, topSellerBooks, setTopSellerBooks, setNewBooks, location, setLocation } = useContext(BookStoreContext)
    const [readyCarouselTop, setReadyCarouselTop] = useState(false)
    const [readyCarouselNew, setReadyCarouselNew] = useState(false)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    useEffect(() => {
        axios.get(`${url}books/top-sellers`)
            .then(res => setTopSellerBooks([...res.data].sort((a, b) =>
                a.title > b.author || a.isNewArrival ? 1 : -1
            ))).catch((e) => console.log(e))

        axios.get(`${url}books/new-arrivals`)
            .then(res => setNewBooks([...res.data].sort((a, b) =>
                a.title > b.author || a.isNewArrival ? 1 : -1
            ))).catch((e) => console.log(e))
    }, [setNewBooks, setTopSellerBooks]);

    useEffect(() => {
        setTimeout(()=> {
            setReadyCarouselTop(true)
        }, 2000)
    }, [topSellerBooks])

    useEffect(() => {
        setTimeout(()=> {
            setReadyCarouselNew(true)
        }, 2000)
    }, [newBooks])

    return (
        admin ? <Redirect to='/admin' /> :
        <div className="body" id="home-page">
            <MovingBanner />
            {readyCarouselTop && <BookCarousel title="Our Top Sellers" />}
            <Ad />
            {readyCarouselNew && <BookCarousel title="New Arrivals" />}
        </div>
    )
}

export default HomePage
