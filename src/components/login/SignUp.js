import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { BookStoreContext } from '../../context/BookStoreContext'
import PasswordChecklist from "react-password-checklist"
import axios from 'axios'
import { url } from '../../index'


const SignUp = () => {
    const { dispatchUser, setLocation } = useContext(BookStoreContext)
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [enableBtn, setEnableBtn] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [setLocation])

    const submitSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const body = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value
        }
        axios.post(`${url}users`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            dispatchUser({ type: "LOGIN", user: res.data })
        }).then(() => {
            history.push('/')
        })
            .catch((err) => console.log(err))
    }

    return (
        <div className="login-form min-height">
            <form className="sign-up-form" onSubmit={submitSignUp}>
                <input type="text" name="username" placeholder="Username" required={true} />
                <input type="email" name="email" placeholder="Email" required={true} />
                <input type="password" name="password" placeholder="Password" required={true} onChange={e => setPassword(e.target.value)} />
                <input type="password" name="repeat-password" placeholder="Repeat Password" required={true} onChange={e => setPasswordAgain(e.target.value)} />
                <PasswordChecklist
                    rules={["length", "number", "capital", "match"]}
                    minLength={8}
                    value={password}
                    valueAgain={passwordAgain}
                    onChange={(isValid) => {setEnableBtn(isValid) }} />
                <button type="submit" disabled={!enableBtn}>Sign Up!</button>
                <Link to="/login" className="sign-up-link">Already a member? Click here to login</Link>
            </form>
        </div>
    )
}

export default SignUp
