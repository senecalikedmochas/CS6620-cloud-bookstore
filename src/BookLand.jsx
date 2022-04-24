import React, { useEffect, useState } from "react"
import BookCard from "./BookCard"
import SearchIcon from "./search.svg"
import Spinner from "./Spinner"

const BookLand = () => {
  const API_URL = `https://gutendex.com/books`

  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const searchBooks = async (title) => {
    setIsLoading(true)
    ///books?page=2
    const response = await fetch(`${API_URL}?search=${title}`)
    const data = await response.json()
    setBooks(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    searchBooks("sick")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchBooks(searchTerm)
  }

  const renderBooks = () => {
    if (isLoading) {
      return <Spinner />
    }
    if (books.length > 0) {
      return (
        <div className="book-container">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )
    } else {
      return <h2 className="status-message">No books found</h2>
    }
  }

  return (
    <>
      <div className="app">
        <h1 className="app-name">BookLand</h1>

        <form className="search" onSubmit={handleSubmit}>
          <input
            placeholder="Search for books..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            className="search-icon"
            onClick={() => searchBooks(searchTerm)}
          />
        </form>
        {renderBooks()}
      </div>
    </>
  )
}

export default BookLand
