import React, { useContext, useEffect } from 'react'
import { BookStoreContext } from '../context/BookStoreContext'

const PageNotFound = () => {
    const { location, setLocation } = useContext(BookStoreContext)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    return (
        <div className="not-found min-height">
            <img alt="404" src="/img/uc.png" />
            <h3>Content will be availabe soon!</h3>
        </div>
    )
}

export default PageNotFound
