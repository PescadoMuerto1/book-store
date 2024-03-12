import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function CategoriesFilter({ onSetFilter, filterBy }) {
   const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
   const [categories, setCategories] = useState(bookService.getCategories())

   useEffect(() => {
      onSetFilter(filterByToEdit)
   }, [filterByToEdit])

   function handleSelect(cg) {
      cg.active = !cg.active ? true : false 

      console.log(cg.active);
         
         const currCgs = categories.reduce((arr, cg) => {
            if (cg.active) {
               arr.push(cg.text)
               console.log(arr);
            }
            return arr
         }, [])
         setFilterByToEdit((prevFilter) =>({...prevFilter, categories:currCgs}) )
      
   }

   return <aside className='side-bar'>
      <section>
         <div className='categories'>
            <h3>categories</h3>
            <ul>
               {categories.map(cg =>
                  <li
                     className={cg.active ? 'active' : ''}
                     onClick={() => handleSelect(cg)}>
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
               <li>English</li>
               <li>Spanish</li>
               <li>Hebrew</li>
            </ul>
         </div>
      </section>
   </aside>
}