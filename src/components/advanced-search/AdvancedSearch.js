import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../index'
import { BookStoreContext } from '../../context/BookStoreContext'
import BookItem from '../BookItem'
import SearchForm from './SearchForm'



const AdvancedSearch = () => {
  const { filters, dispatchFilters, filtered, setFiltered, setLocation } = useContext(BookStoreContext)
  const [isOpenFilters, setIsOpenFilters] = useState(false)
  
  useEffect(() => {
    setLocation(window.location.pathname)
    dispatchFilters({ type: "TITLE", title: "" })
    dispatchFilters({ type: "AUTHOR", author: "" })
    dispatchFilters({ type: "GENRE", genre: "any" })
    dispatchFilters({ type: "PRICE", price: "any" })
  }, [])


  useEffect(() => {
    const getBooks = async ({ title, author, genre, price }) => {
      if (title === '' && author === '' && genre === 'any' && price === "0,1000")
        return await axios.get(`${url}books/advanced/discount?discount=${"20,100"}`)
          .then(res => {
            return setFiltered(res.data)
          })
          .catch(e => console.log(e))
      else
        return await axios.get(`${url}books/advanced?title=${title}&author=${author}&genre=${genre}&price=${price}`)
          .then(res => {
            return setFiltered(res.data)
          })
    }
    getBooks(filters)
  }, [filters, setFiltered])


  const openFilters = (e)=>{
    e.preventDefault()
    setIsOpenFilters(!isOpenFilters)
  }

  return (
    <form>
      <div className="advanced-search">
        <div id="advanced-search">
          <div className="advanced__menu">
              {isOpenFilters && <div className="menu">
                  <SearchForm />
              </div>}
              <button onClick={openFilters}>{isOpenFilters? "Close": "Filters"}</button>
          </div>
          <div className="search-items__container">
            {filtered.map((d) => (
              <BookItem key={d.shortTitle} data={d} />
            ))}
          </div>
        </div>
      </div>
    </form>
  )
}

export default AdvancedSearch
