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

    return<section className="car-filter">
    <h2>Filter books</h2>
    

    <form onSubmit={onFilter}>
        <label htmlFor="title">Title</label>
        <input type="text"
            id="title"
            name="title"
            value={filterByToEdit.title}
            onChange={handleChange}
            placeholder="By title" />

        <label htmlFor="min-Price">min price</label>
        <input type="number"
            id="min-price"
            name="minPrice"
            value={filterByToEdit.minPrice}
            onChange={handleChange}
            placeholder="By min price" />

        <button>Filter</button>
    </form>
</section>
}