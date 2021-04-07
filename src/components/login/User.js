import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { url } from '../../index';
import { BookStoreContext } from "../../context/BookStoreContext";
import EditUser from './EditUser'

const User = () => {
    const { user, dispatchUser, setLocation } = useContext(BookStoreContext)
    const [openEditor, setOpenEditor] = useState(false)
    const [type, setType] = useState('')
    const history = useHistory()

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [setLocation])

    const editUser = (update) => {
        console.log(update)
        axios.patch(`${url}users/me`, update, {
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            }
        })
        alert(update.email ? "Email Changed!" : "Password Changed")
    }

    const removeUser = () => {
        const res = axios.delete(`${url}users/me`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
        dispatchUser({ type: "LOGOUT" })
        alert('Account removerd. Sorry to see you leave')
        return res.data
    }

    const changeEmail = () => {
        setType('email')
        setOpenEditor(true)
    }

    const changePassword = () => {
        setType('password')
        setOpenEditor(true)
    }

    const logoutAll = () => {
        axios.post(`${url}users/logoutAll`, {}, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then(() => dispatchUser({ type: "LOGOUT" }))
    }

    const close = () => {
        setOpenEditor(false)

    }

    return (
        !!user ?
            <>
                {openEditor && <EditUser type={type} close={close} editUser={editUser} email={user.user.email} />}
                <div className="min-height user-management__page">
                    <div className="user-management__container">
                        <div className="user-management__link" onClick={() => history.push('/cart')}>Go to Cart</div>
                        <div className="user-management__link" onClick={changeEmail}>Change Email</div>
                        <div className="user-management__link" onClick={changePassword}>Change Password</div>
                        <div className="user-management__link" onClick={logoutAll}>Sign Out of All Devices</div>
                        <div className="user-management__link" onClick={removeUser}>Delete Account</div>
                    </div>
                </div>
            </> :
            <Redirect to='/login' />
    )
}

export default User