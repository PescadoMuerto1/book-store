const { useState, useEffect } = React

import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'


export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
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

                <div className='sort-container'>
                    <label htmlFor="sort-by">sort by</label>
                    <select id='sort-by'>
                        <option value="price">price</option>
                        <option value="title">title</option>
                        <option value="year">year</option>
                    </select>
                </div>                           
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