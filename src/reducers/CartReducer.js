const CartReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            const newState = [...state]
            newState[action.index] = action.price
            return newState
        case 'RESET':
            return []
        default:
            return state
    }
}

export default CartReducer
