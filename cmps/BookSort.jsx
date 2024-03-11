

export function BookSort({ sortBy, setSortBy }) {

    function handleChange(ev) {
        setSortBy(ev.target.value)
    }

    return <div className='sort-container'>
        <label htmlFor="sort-by">sort by</label>
        <select id='sort-by' onChange={handleChange} value={sortBy}>
            <option value="title">title</option>
            <option value="amount">price</option>
            <option value="publishedDate">year</option>
        </select>
    </div>
}