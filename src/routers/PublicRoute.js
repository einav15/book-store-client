import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { BookStoreContext } from '../context/BookStoreContext'

export const PublicRoute = ({ component: Component, path = '/' }) => {
    const { user } = useContext(BookStoreContext)

    return (
        <Route path={path} component={() =>
            (!!user && (path === '/login' || path === '/sign-up') ? <Redirect to="/" /> : <Component />)} />
    )
}

export default PublicRoute