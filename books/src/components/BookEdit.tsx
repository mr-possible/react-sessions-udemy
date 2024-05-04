import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Book from "../interfaces/Book"
import BookContext from "../context/books"

interface BookEditProps {
    book: Book,
    onSubmit: () => void
}

function BookEdit({ book, onSubmit }: BookEditProps) {
    const [title, setTitle] = useState<string>(book.title)
    const { updateBookTitle } = useContext(BookContext)

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        onSubmit()
        updateBookTitle(book.id, title)
    }

    return (
        <div>
            <form className="update-title-form" onSubmit={handleFormSubmit}>
                <label className="label" htmlFor="update-title">Enter new title: </label>
                <input className="input is-normal"
                    id="update-title"
                    type="text"
                    onChange={handleChange}
                    value={title}
                    required
                />
                <button className="button is-light btn-save" type="submit">Save</button>
            </form>
        </div>
    )
}

export default BookEdit