const { useState, useEffect } = React

export function BookFilter({onSetFilter, filterBy}) {
	const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
		onSetFilter(filterByToEdit)
	}, [filterByToEdit])

    function onFilter(ev) {
		ev.preventDefault()
		onSetFilter(filterByToEdit)
	}

    function handleChange({ target }) {
		let { value, name: field, type } = target
		if (type === 'number') value = +value
		setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
	}

    return<section className="book-filter">    

        <input type="text"
            id="title"
            name="title"
            value={filterByToEdit.title}
            onChange={handleChange}
            placeholder="Search" />
        <label htmlFor="title">🔎</label>
    
</section>
}