import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { BookStoreContext } from '../../context/BookStoreContext'
import { url } from '../../index'


const LoginPage = ({ adminLogin }) => {
    const { user, dispatchUser, admin, dispatchAdmin, location, setLocation, } = useContext(BookStoreContext)
    const history = useHistory();

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [location, setLocation])

    const submitLogin = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        if(!adminLogin) 
        axios.post(`${url}users/login?username=${username}&password=${password}`)
            .then((res) => dispatchUser({ type: "LOGIN", user: res.data }))
            .catch((err) => {
                alert("Wrong username or password!")
                e.target.reset()
            })
        else
        axios.post(`${url}admin/login?username=${username}&password=${password}`)
            .then((res) => dispatchAdmin({ type: "LOGIN", user: res.data }))
            .catch((err) => {
                alert("Wrong username or password!")
                e.target.reset()
            })
        if (user) 
            history.push('/')
        
        if(admin)
            history.push('/admin')
        

    }
    const className = "login-form " + (adminLogin? "admin-login": "min-height") 
    return (
        !user || !admin ?
            <div className={className}>
                <form onSubmit={submitLogin}>
                    <input name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                {!adminLogin && <Link to='/sign-up' className="sign-up-link">Not a member yet? Click here to sign up</Link>}
            </div> :
            <Redirect to='/' /> 
    )
}

export default LoginPage