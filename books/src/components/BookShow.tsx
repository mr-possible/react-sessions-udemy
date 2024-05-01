import { ReactElement, useState } from "react"
import Book from "../interfaces/Book"
import BookEdit from "./BookEdit"

interface BookShowProps {
    book: Book,
    onDelete: (id: number) => void,
    onUpdate: (id: number, title: string) => void
}

function BookShow({ book, onDelete, onUpdate }: BookShowProps): ReactElement {
    const [showEdit, setShowEdit] = useState<boolean>(false)

    function handleEdit() {
        setShowEdit(!showEdit)
    }

    function handleDelete() {
        onDelete(book.id);
    }

    function handleSubmit(id: number, newTitle: string) {
        setShowEdit(false)
        onUpdate(id, newTitle)
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