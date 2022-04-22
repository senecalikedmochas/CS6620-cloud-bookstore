import React, { useState } from "react"
import Modal from "react-modal"
import SearchIcon from "./search.svg"

const Test = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("thank you")
  }

  return (
    <div>
      <div onClick={() => setModalIsOpen(true)}>
        <img src={SearchIcon} alt="search" className="search-icon" />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>
          Thank you for using BookLand! Please enter your email below and your
          book will be delievered to you momentarily.
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" />
          <button type="submit">Submit</button>
        </form>

        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}

export default Test
