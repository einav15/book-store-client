const UsersReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            localStorage.setItem('user', JSON.stringify(action.user))
            return action.user
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.user))
            return action.user
        case 'LOGOUT':
            localStorage.setItem('user', null)
            return null
        default:
            return state
    }
}

export default UsersReducer
