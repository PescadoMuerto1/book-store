import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onSelectBook }) {

   return (
      <ul className="car-list">
         {
            books.map(book =>
               <li key={book.id} onClick={() => onSelectBook(book)}>
                  <BookPreview book={book} />
               </li>
            )
         }
      </ul>
   )
}