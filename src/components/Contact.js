import React, { useContext, useEffect } from 'react'
import { BookStoreContext } from '../context/BookStoreContext'

const Contact = () => {
    const { location, setLocation } = useContext(BookStoreContext)

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    return (
        <div className="contact__container min-height">
            <div className="contact__body">
                <h3>Contact Us</h3>
                <div className="contact__info">
                    <div className="contact__text">
                        <h5>Our service center:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h6>Address: 432 one st, Erez, Israel</h6>
                        <h6>Email: support@thebookstore.com</h6>
                        <h6>Phone #: 08-680-8680</h6>
                    </div>
                    <img src="https://pics.freeicons.io/uploads/icons/png/18362870351582823590-512.png" alt="calling-center" />
                </div>
            </div>
        </div>
    )
}

export default Contact
