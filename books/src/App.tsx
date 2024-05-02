import 'bulma/css/bulma.css'
import './css/App.css'

import { ReactElement, useEffect, useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import Book from "./interfaces/Book"
import axios, { AxiosResponse } from 'axios'

function App(): ReactElement {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getAllBooks()
  }, [])

  async function getAllBooks() {
    const response: AxiosResponse<Book[]> = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  async function createBook(newTitle: string) {
    const response: AxiosResponse<Book> = await axios.post('http://localhost:3001/books',
      {
        id: Math.round(Math.random() * 9999),
        title: newTitle
      }
    )
    const updatedBooks = [
      ...books,
      response.data
    ]
    setBooks(updatedBooks);
  }

  async function deleteBookById(id: number) {
    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return id !== book.id
    })
    setBooks(updatedBooks)
  }

  async function updateBookTitle(id: number, newTitle: string) {
    const response: AxiosResponse<Book> = await axios.put(`http://localhost:3001/books/${id}`,
      {
        title: newTitle
      }
    )
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };   // VERY IMPORTANT PART HERE!! - take all diff new key-value pairs and add to the object to be sent.
      }
      return book;
    });
    setBooks(updatedBooks)
  }

  return (
    <div className="app-container">
      <BookCreate onSubmit={createBook} />
      <hr />
      <BookList booklist={books} onDelete={deleteBookById} onUpdate={updateBookTitle} />
    </div>
  )
}

export default App