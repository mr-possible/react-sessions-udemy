import { ReactElement } from "react"
import BookShow from "./BookShow"
import Book from "../interfaces/Book"

interface BookListProps {
    booklist: Book[],
    onDelete: (id: number) => void,
    onUpdate: (id: number, title: string) => void
}

function BookList({ booklist, onDelete, onUpdate }: BookListProps): ReactElement {
    const renderedBooks = booklist.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate} />
    })

    return <div>{renderedBooks}</div>
}

export default BookList