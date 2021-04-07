import React, { useState, useEffect, useReducer } from 'react'
import FiltersReducer from '../reducers/FiltersReducer'
import UsersReducer from '../reducers/UsersReducer'
import AdminReducer from '../reducers/AdminReducer'

export const BookStoreContext = React.createContext()

const BookStoreProvider = (props) => {
    const userFromStorage = localStorage.getItem('user')
    const [openDropdownMenu, setOpenDropdownMenu] = useState(false)
    const [topSellerBooks, setTopSellerBooks] = useState([])
    const [newBooks, setNewBooks] = useState([])
    const [windowSize, setWindowSize] = useState(undefined);
    const [location, setLocation] = useState(window.location.pathname)
    const [filtered, setFiltered] = useState([])
    const [filters, dispatchFilters] = useReducer(FiltersReducer, { title: "", author: "", genre: "any", price: "0,1000" })
    const [user, dispatchUser] = useReducer(UsersReducer, JSON.parse(userFromStorage))
    const [admin, dispatchAdmin] = useReducer(AdminReducer, JSON.parse(null))

    const useWindowSize = () => {
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize
    }
    useWindowSize()

    return (
        <BookStoreContext.Provider value={{
            windowSize,
            openDropdownMenu, setOpenDropdownMenu,
            topSellerBooks, setTopSellerBooks,
            newBooks, setNewBooks,
            filters, dispatchFilters,
            filtered, setFiltered,
            location, setLocation,
            user, dispatchUser,
            admin, dispatchAdmin
        }}>
            {props.children}
        </BookStoreContext.Provider>
    )
}


export default BookStoreProvider