const { useState, useEffect } = React

import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then((books) => { setBooks(books); console.log(books) })
    }

    function onSelectBook(book) {
        setSelectedBook(book)
    }

    function onRemoveBook(ev, bookId) {
        ev.stopPropagation()
        bookService.remove(bookId)
        .then(() => {
            setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
        })
        .catch(err => console.log(err))
    }

    if (!books) return <div>loading...</div>

    return (
        <section className='book-index'>
            {
                !selectedBook && <BookList
                    books={books}
                    onSelectBook={onSelectBook}
                    onRemoveBook={onRemoveBook}
                />
            }

            {
                selectedBook && <BookDetails 
                    book={selectedBook}
                    onGoBack={()=> onSelectBook(null)}
                />
            }
        </section>
    )
}