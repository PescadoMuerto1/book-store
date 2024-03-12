const { useState, useEffect } = React

import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'
import { BookSort } from '../cmps/BookSort.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { CategoriesFilter } from '../cmps/CategoriesFilter.jsx'


export function BookIndex() {
    const [books, setBooks] = useState(null)
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

    function onRemoveBook(ev, bookId) {
        ev.stopPropagation()
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
                showSuccessMsg(`Book removed successfully${bookId}`)
            })
            .catch(err => showSuccessMsg('Book removed successfully'))
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
            
            <CategoriesFilter
            onSetFilter={onSetFilter}
            filterBy={filterBy} 
            />
            
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
                <BookList
                    books={books}
                    onRemoveBook={onRemoveBook}
                />
            }

        </React.Fragment>
    )
}