import React, { useState } from 'react'
import PasswordChecklist from "react-password-checklist"

const EditUser = ({ type, editUser, close, email }) => {
    const text = type === "email" ? "Email Address" : "Password"
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [enableBtn, setEnableBtn] = useState(false)

    const handleChangePassInput = (e) => {
        if (type === 'password')
            setPassword(e.target.value)
    }

    const onSubmitEditUser = (e) => {
        e.preventDefault()
        const form = e.target
        const update = type === "email" ? { email: form.new.value } : { password: form.new.value }
        editUser(update)
        close()
    }

    return (
        <>
            <div onClick={close} className="edit-book__background "></div>
            <div className="edit-user__bg">
                <form onSubmit={onSubmitEditUser} className="edit-book edit-user">
                    <span className="book__delete exit-btn" onClick={close}>X</span>
                    <h2>Enter a New {text}</h2>
                    {type === "email" && <p>Your current email is: {email}</p>}
                    <input type={type} name="new" placeholder={text} onChange={handleChangePassInput} />
                    {text === "Password" && (
                        <>
                            <input type="password" name="repeat" placeholder="Repeat Password" onChange={(e) => setPasswordAgain(e.target.value)} />
                            <PasswordChecklist
                                rules={["length", "number", "capital", "match"]}
                                minLength={8}
                                value={password}
                                valueAgain={passwordAgain}
                                onChange={(isValid) => { setEnableBtn(isValid) }} />
                        </>
                    )}
                    <button type="submit" disabled={type === "password" ? !enableBtn : false}>Change</button>
                </form>
            </div>
        </>
    )
}

export default EditUser