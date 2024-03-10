import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {
   console.log(books);

   return (
      <ul className="car-list">
         {
            books.map(book =>
               <li key={book.id}>
                  <BookPreview book={book} />
               </li>
            )
         }
      </ul>
   )
}