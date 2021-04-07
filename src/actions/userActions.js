export const login = (user) => ({
    type: 'LOGIN',
    user
})

export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    user
})

export const logout = () => ({
    type: 'LOGOUT'
})
