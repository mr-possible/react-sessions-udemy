import { ChangeEvent, FormEvent, ReactElement, useContext, useState } from "react"
import BookContext from "../context/books"

function BookCreate(): ReactElement {
    const [bookTitle, setBookTitle] = useState<string>('')
    const { createBook } = useContext(BookContext)

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setBookTitle(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        createBook(bookTitle)
        setBookTitle('')
    }

    return (
        <div className="create-book-form-container">
            <form onSubmit={handleFormSubmit}>
                <label className="label" htmlFor="book-title">Enter book title: </label>
                <input className="input is-normal"
                    id="book-title"
                    type="text"
                    value={bookTitle}
                    onChange={handleInputChange}
                    required
                />
                <button className="button is-light btn-add" type="submit">Add</button>
            </form>
        </div>)
}

export default BookCreate