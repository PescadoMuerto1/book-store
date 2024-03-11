const { useState, useEffect } = React

import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'
import { BookSort } from '../cmps/BookSort.jsx'


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [sortBy, setSortBy] = useState('title')

    useEffect(() => {
        loadBooks()
    }, [filterBy, sortBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then((books) => sortBooks(books, sortBy))
            .then((books) => setBooks(books))
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

    function onSetFilter(fieldsToUpdate) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    function sortBooks(books, sortBy) {
        books.sort((book1, book2) => {
            if (sortBy === 'amount') return book1.listPrice.amount - book2.listPrice.amount
            return book1[sortBy] < book2[sortBy] ? -1 : 1
        })
        return books
    }

    if (!books) return <div>loading...</div>

    return (
        <React.Fragment>
            <aside className='side-bar'>
                <section>
                    <div className='categories'>
                        <h3>categories</h3>
                        <ul>
                            <li>Computers</li>
                            <li>Hack</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className='categories'>
                        <h3>language</h3>
                        <ul>
                            <li>English</li>
                            <li>Spanish</li>
                            <li>Hebrew</li>
                        </ul>
                    </div>
                </section>
            </aside>
            <div className='search-bar-container'>
                <BookFilter
                    onSetFilter={onSetFilter}
                    filterBy={filterBy} />
                <BookSort
                    setSortBy={setSortBy}
                    sortBy={sortBy}
                />
            </div>
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
                    onGoBack={() => onSelectBook(null)}
                />
            }
        </React.Fragment>
    )
}