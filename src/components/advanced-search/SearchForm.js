import React, { useContext } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'

const SearchForm = () => {
    const { windowSize, dispatchFilters } = useContext(BookStoreContext)

    const onChangeText = (e) => {
        const text = e.target.value
        setTimeout(() => {
            if (text === e.target.value)
                onChange(e)
        }, 500)
    }

    const onChange = (e) => {
        switch (e.target.name) {
            case "title":
                dispatchFilters({ type: "TITLE", title: e.target.value })
                break
            case "author":
                dispatchFilters({ type: "AUTHOR", author: e.target.value })
                break
            case "genre":
                dispatchFilters({ type: "GENRE", genre: e.target.value })
                break
            case "price":
                dispatchFilters({ type: "PRICE", price: e.target.value })
                break
            default:
                console.log('default')
        }
    }



    return (
        <>
            <div className="side-menu__item">
                <h3>Title</h3>
                <div className="side-menu__options">
                    <input name="title" className="advanced-search__by-title" id="search-by-title" onChange={onChangeText} />
                </div>
                <div className="side-menu__breaker"></div>
                <h3>Author</h3>
                <div className="side-menu__options">
                    <input name="author" className="advanced-search__by-title" id="search-by-author" onChange={onChangeText} />
                </div>
                <div className="side-menu__breaker"></div>
                <h3>Genre</h3>
                <div className="side-menu__options">
                    {windowSize > 800 && <ul id="genre">
                        <li className="side-menu__option"><input type="radio" name="genre" value="any" onChange={onChange} />Any</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Advantures" onChange={onChange} />Adventures</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Biography" onChange={onChange} />Biography</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Fantasy" onChange={onChange} />Fantasy</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Horror" onChange={onChange} />Horror</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Non-Fiction" onChange={onChange} />Non-Fiction</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Mystery" onChange={onChange} />Mystery</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Romance" onChange={onChange} />Romance</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Sci-Fi" onChange={onChange} />Sci-Fi</li>
                        <li className="side-menu__option"><input type="radio" name="genre" value="Thriller" onChange={onChange} />Thriller</li>
                    </ul>}
                    {windowSize < 801 && <select name="genre" onChange={onChange}>
                        <option value="any">Any</option>
                        <option value="Advantures">Adventures</option>
                        <option value="Biography" onChange={onChange}>Biography</option>
                        <option value="Fantasy" onChange={onChange}>Fantasy</option>
                        <option value="Horror" onChange={onChange}>Horror</option>
                        <option value="Non-Fiction" onChange={onChange}>Non-Fiction</option>
                        <option value="Mystery" onChange={onChange}>Mystery</option>
                        <option value="Romance" onChange={onChange}>Romance</option>
                        <option value="Sci-Fi" onChange={onChange}>Sci-Fi</option>
                        <option value="Thriller" onChange={onChange}>Thriller</option>
                    </select>}
                </div>
                <div className="side-menu__breaker"></div>
                <h3>Price Range</h3>
                <div className="side-menu__options">
                    {windowSize > 800 && <ul id="price">
                        <li className="side-menu__option"><input type="radio" name="price" value="any" onChange={onChange} />Any</li>
                        <li className="side-menu__option"><input type="radio" name="price" value="up-to-15" onChange={onChange} />Up to $15</li>
                        <li className="side-menu__option"><input type="radio" name="price" value="15-to-20" onChange={onChange} />$15 to $20</li>
                        <li className="side-menu__option"><input type="radio" name="price" value="20-to-25" onChange={onChange} />$20 to $25</li>
                        <li className="side-menu__option"><input type="radio" name="price" value="25-to-50" onChange={onChange} />$25 to $50</li>
                        <li className="side-menu__option"><input type="radio" name="price" value="50-and-up" onChange={onChange} />$50 & Above</li>
                    </ul>}
                    {windowSize < 801 && <select name="price" onChange={onChange}>
                        <option value="any" >Any</option>
                        <option value="up-to-15">Up to $15</option>
                        <option value="15-to-20">$15 to $20</option>
                        <option value="20-to-25">$20 to $25</option>
                        <option value="25-to-50">$25 to $50</option>
                        <option value="50-and-up">$50 & Above</option>
                    </select>}
                </div>
                <div className="side-menu__breaker"></div>
            </div>
        </>
    )
}


export default SearchForm



