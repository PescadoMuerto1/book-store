import { booksDemoData } from './booksDemoData.js'
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

const gCategories = [{text: "Computers"},{text: "Hack"},{text: "Science fiction"},{text: "Mystery"},{text: "Horror"}]
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getCategories,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    console.log(filterBy);
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.text) {
                const regex = new RegExp(filterBy.text, 'i')
                books = books.filter(book => regex.test(book.title) || regex.test(book.authors[0]))
            }
            if (filterBy.categories) {
                if(filterBy.categories.length){
                books = books.filter(({categories}) => filterBy.categories.some((cg) =>categories.includes(cg)))
            }}
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook() {
    return {
        id: "",
        title: "",
        description: "",
        thumbnail: "",
        listPrice: {
            amount: 0,
            currencyCode: "",
            isOnSale: false
        }
    }
}

function getDefaultFilter() {
    return { text: '', minPrice: 50 }
}

function getCategories() {
    return gCategories
}

// function setFilterBy(filterBy) {
//     gFilterBy[filterBy]
// }

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            var idx = books.findIndex(book => book.id === bookId)
            if (idx === books.length - 1) idx = -1
            return books[idx + 1].id
        })
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksDemoData.getBooks()
        console.log(books);
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

// function _createBook(vendor, maxSpeed = 250) {
//     const book = getEmptyBook(vendor, maxSpeed)
//     book.id = utilService.makeId()
//     return book
// }