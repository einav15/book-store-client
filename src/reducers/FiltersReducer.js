const priceFilter = (priceRange) => {
    if (priceRange === "any")
        return "0,1000"
    if (priceRange === "up-to-15")
        return "0,15"
    if (priceRange === "15-to-20")
        return "15,20"
    if (priceRange === "20-to-25")
        return "20,25"
    if (priceRange === "25-to-50")
        return "25,50"
    if (priceRange === "50-and-up")
        return "50,1000"
}

const FiltersReducer = (state, action) => {
    switch (action.type) {
        case 'TITLE':
            return { ...state, title: action.title }
        case 'AUTHOR':
            return { ...state, author: action.author }
        case 'GENRE':
            return { ...state, genre: action.genre }
        case 'PRICE':
            const priceRange = priceFilter(action.price)
            return { ...state, price: priceRange }
        default:
            return state
    }
}

export default FiltersReducer
