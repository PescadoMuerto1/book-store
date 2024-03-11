const { Link } = ReactRouterDOM

import { BookFilter } from "./BookFilter.jsx"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemoveBook }) {
   console.log(books);
   return (
      <ul className="book-list book-layout">
         {
            books.map(book =>
               <li className='book-card' key={book.id}>
                  <Link to={`/book/${book.id}`}>
                     <BookPreview book={book} />
                  </Link>

                  <button onClick={(ev) => onRemoveBook(ev, book.id)}>X</button>
               </li>
            )
         }
      </ul >
   )
}