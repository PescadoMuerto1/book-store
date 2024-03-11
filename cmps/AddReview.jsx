
const { useState } = React

import { bookService } from '../services/book.service.js'
import { BookPreview } from './BookPreview.jsx'
import { Stars } from './Stars.jsx'

export function AddReview({ book }) {
   const [review, setReview] = useState(null)
   const { rating, fullName, readAt } = review || 0

   function handleChange({ target }) {
      const field = target.name
      let value = target.value
      console.log(field, value);
      switch (target.type) {
         case 'number':
         case 'range':
            value = +value || ''
            break

         case 'checkbox':
            value = target.checked
            break

         default:
            break
      }

      setReview(prevReview => ({ ...prevReview, [field]: value }))
   }

   function onSaveReview(ev) {
      ev.preventDefault()
      if(!book.reviews) book.reviews =[]
      bookService.save(book.reviews.push(review))
      .then(savedBook => console.log(book))
   }

   return (
      <form key='actions' onSubmit={onSaveReview}>
         <input type="text"
            id='fullName'
            name='full-name'
            value={fullName}
            onChange={handleChange}
            placeholder='Enter full name'
         />

         <div className='stars'>
            <Stars
               rating={rating}
               handleChange={handleChange}
            />
         </div>
         <input type="date"
            id='read-at'
            name='read-at'
            value={readAt}
            onChange={handleChange}
         />
         <button>submit</button>
      </form>
   )
}