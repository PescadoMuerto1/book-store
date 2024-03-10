import { BookFilter } from "./BookFilter.jsx"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onSelectBook, onRemoveBook }) {

   return (
      <ul className="car-list">
         {
            books.map(book =>
         <li key={book.id} onClick={() => onSelectBook(book)}>
            <BookPreview book={book} />
            <button onClick={(ev) => onRemoveBook(ev, book.id)}>X</button>
            <button></button>
         </li>
         )
         }
      </ul>
   )
}