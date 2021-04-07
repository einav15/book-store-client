import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/styles.scss'
import BookStoreContextProvider from '../context/BookStoreContext'
import Header from '../components/header/Header'
import PageNotFound from '../components/PageNotFound'
import Contact from '../components/Contact'
import AdvancedSearch from '../components/advanced-search/AdvancedSearch'
import HomePage from '../components/home/HomePage'
import LoginForm from "../components/login/LoginForm";
import SignUp from "../components/login/SignUp";
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import Cart from '../components/cart/Cart'
import BookPage from '../components/BookPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AdminControlPage from '../components/login/AdminControlPage'
import User from '../components/login/User'


const AppRouter = () => {

    return (
        <BrowserRouter>
            <BookStoreContextProvider>
                <Switch>
                    <Route path="/admin" exact={true}>
                        <AdminControlPage />
                    </Route>
                    <Route>
                        <Header />
                        <SideMenu isDesktop={true} />
                        <Switch>
                            <Route path="/" component={HomePage} exact={true} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/advanced" component={AdvancedSearch} />
                            <PublicRoute path="/login" component={LoginForm} />
                            <PublicRoute path="/sign-up" component={SignUp} />
                            <PrivateRoute path="/cart" component={Cart} />
                            <PrivateRoute path="/me" component={User} />
                            <Route path="/book/:id" component={BookPage} />
                            <Route component={PageNotFound} />
                        </Switch>
                        <Footer />
                    </Route>
                </Switch>
            </BookStoreContextProvider>
        </BrowserRouter>

    )
}
export default AppRouter



