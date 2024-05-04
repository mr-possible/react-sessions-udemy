import { ReactElement, useContext } from "react"
import BookShow from "./BookShow"
import BookContext from "../context/books"


function BookList(): ReactElement {
    const { books } = useContext(BookContext)
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })

    return <div>{renderedBooks}</div>
}

export default BookList