import { ChangeEvent, FormEvent, ReactElement, useState } from "react"

interface BookCreateProps {
    onSubmit: (value: string) => void
}

function BookCreate({ onSubmit }: BookCreateProps): ReactElement {
    const [bookTitle, setBookTitle] = useState<string>('')

    function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        setBookTitle(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        onSubmit(bookTitle)
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