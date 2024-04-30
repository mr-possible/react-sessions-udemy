import { ReactElement, useState } from "react"
import '../css/SearchBar.css'

interface SearchBarProps {
    onSubmit: (value: string) => void
}

function SearchBar({ onSubmit }: SearchBarProps): ReactElement {
    const [searchTerm, setSearchTerm] = useState<string>('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchTerm(event.target.value)
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        onSubmit(searchTerm);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="search">Enter your search term:</label>
                <input id='search' value={searchTerm} onChange={handleInputChange} />
            </form>
        </div>
    )
}

export default SearchBar
