import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { BookStoreContext } from '../context/BookStoreContext'

export const PrivateRoute = ({ component: Component, path = "/" }) => {
    const { user } = useContext(BookStoreContext)
    return (
        <Route path={path} component={() => (
            user !== null ? (<Component />) : (<Redirect to="/login" />)
        )} />
    )
}

export default PrivateRoute