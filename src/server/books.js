import axios from 'axios'
import { url } from '../index'

export const updateUser = (currentUser) => {
    if (!currentUser)
        return
    const { cart, _id } = currentUser.user
    axios.patch(`${url}users/update`, { cart, _id }, {
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        }
    })
        .then((res) => res)
        .catch(e => console.log(e))
}