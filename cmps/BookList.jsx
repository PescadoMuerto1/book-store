import { BookFilter } from "./BookFilter.jsx"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onSelectBook, onRemoveBook }) {

   return (
      <ul className="book-list book-layout">
         {
            books.map(book =>
         <li className='book-card'key={book.id} onClick={() => onSelectBook(book)}>
            <BookPreview book={book} />
            {/* <button onClick={(ev) => onRemoveBook(ev, book.id)}>X</button> */}
         </li>
         )
         }
      </ul>
   )
}