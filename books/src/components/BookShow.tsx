import { ReactElement, useContext, useState } from "react"
import Book from "../interfaces/Book"
import BookEdit from "./BookEdit"
import BookContext from "../context/books"

interface BookShowProps {
    book: Book,
}

function BookShow({ book }: BookShowProps): ReactElement {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const { deleteBookById } = useContext(BookContext)

    function handleEdit() {
        setShowEdit(!showEdit)
    }

    function handleDelete() {
        deleteBookById(book.id);
    }

    function handleSubmit() {
        setShowEdit(false)
    }

    {
        return showEdit
            ?
            <BookEdit book={book} onSubmit={handleSubmit} />
            : <div className="book-show-container content">
                <h2>{book.title}</h2>
                <div className="actions">
                    <button className="button is-light btn-edit" onClick={handleEdit}>Edit</button>
                    <button className="button is-light btn-delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
    }
}

export default BookShow