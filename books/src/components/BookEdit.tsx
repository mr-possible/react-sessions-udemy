import { ChangeEvent, FormEvent, useState } from "react"
import Book from "../interfaces/Book"

interface BookEditProps {
    book: Book,
    onSubmit: (id: number, title: string) => void
}

function BookEdit({ book, onSubmit }: BookEditProps) {
    const [title, setTitle] = useState<string>(book.title)

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event.target.value)
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        onSubmit(book.id, title)
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