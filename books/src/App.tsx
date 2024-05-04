import 'bulma/css/bulma.css'
import './css/App.css'

import { ReactElement, useContext, useEffect } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import BookContext from './context/books'

function App(): ReactElement {
  const { getAllBooks } = useContext(BookContext)

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <div className="app-container">
      <BookCreate />
      <hr />
      <BookList />
    </div>
  )
}

export default App