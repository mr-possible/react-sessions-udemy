import 'bulma/css/bulma.css'
import './css/App.css'

import { ReactElement, useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import Book from "./interfaces/Book"

function App(): ReactElement {
  const [books, setBooks] = useState<Book[]>([])

  function createBook(newTitle: string) {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: newTitle
      }
    ]
    setBooks(updatedBooks);
  }

  function deleteBookById(id: number) {
    const updatedBooks = books.filter((book) => {
      return id !== book.id
    })
    setBooks(updatedBooks)
  }

  function updateBookTitle(id: number, newTitle: string) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
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