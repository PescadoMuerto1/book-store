import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function CategoriesFilter({ onSetFilter, filterBy }) {
   const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
   const [categories, setCategories] = useState(bookService.getCategories())
   const [languages, setLanguages] = useState(bookService.getLanguages())

   useEffect(() => {
      onSetFilter(filterByToEdit)
   }, [filterByToEdit])

   function handleSelect(cg, cgs, key) {
      cg.active = !cg.active ? true : false

      console.log(cg.active);

      const currCgs = cgs.reduce((arr, cg) => {
         if (cg.active) {
            if(key === 'languages') arr.push(cg.text.slice(0, 2))
            else(arr.push(cg.text))
         }
         return arr
      }, [])
      setFilterByToEdit((prevFilter) => ({ ...prevFilter, [key]: currCgs }))

   }

   function onSelect(cg, type) {
      if (type === 'cg') {
         handleSelect(cg, categories, 'categories')
      }
      else if( type === 'len'){
         handleSelect(cg, languages, 'languages')
      }
   }

   return <aside className='side-bar'>
      <section>
         <div className='categories'>
            <h3>categories</h3>
            <ul>
               {categories.map(cg =>
                  <li
                     className={cg.active ? 'active' : ''}
                     onClick={() => onSelect(cg, 'cg')}>
                     {cg.text}
                  </li>
               )}
            </ul>

         </div>
      </section>

      <section>
         <div className='categories'>
            <h3>language</h3>
            <ul>
            {languages.map(cg =>
                  <li
                     className={cg.active ? 'active' : ''}
                     onClick={() => onSelect(cg, 'len')}>
                     {cg.text}
                  </li>
               )}
            </ul>
         </div>
      </section>
   </aside>
}