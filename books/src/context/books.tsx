import axios, { AxiosResponse } from "axios";
import { createContext, ReactNode, useState } from "react";
import Book from "../interfaces/Book";

interface ProviderProps {
    children: ReactNode
}

type BookContextType = {
    books: Book[];
    getAllBooks: () => Promise<void>;
    createBook: (newTitle: string) => Promise<void>;
    deleteBookById: (id: number) => Promise<void>;
    updateBookTitle: (id: number, newTitle: string) => Promise<void>;
};

const BookContext = createContext<BookContextType>({
    books: [],
    getAllBooks: async () => { },
    createBook: async (_newTitle: string) => { },
    deleteBookById: async (_id: number) => { },
    updateBookTitle: async (_id: number, _newTitle: string) => { }
});

function Provider({ children }: ProviderProps) {
    const [books, setBooks] = useState<Book[]>([])

    async function getAllBooks() {
        const response: AxiosResponse<Book[]> = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    async function createBook(newTitle: string) {
        const response: AxiosResponse<Book> = await axios.post('http://localhost:3001/books',
            {
                id: Math.round(Math.random() * 9999),
                title: newTitle
            }
        )
        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks);
    }

    async function deleteBookById(id: number) {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return id !== book.id
        })
        setBooks(updatedBooks)
    }

    async function updateBookTitle(id: number, newTitle: string) {
        const response: AxiosResponse<Book> = await axios.put(`http://localhost:3001/books/${id}`,
            {
                title: newTitle
            }
        )
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };   // VERY IMPORTANT PART HERE!! - take all diff new key-value pairs and add to the object to be sent.
            }
            return book;
        });
        setBooks(updatedBooks)
    }

    return (
        <BookContext.Provider value={{ books, getAllBooks, createBook, deleteBookById, updateBookTitle }}>
            {children}
        </BookContext.Provider>
    );
}

export { Provider };
export default BookContext;