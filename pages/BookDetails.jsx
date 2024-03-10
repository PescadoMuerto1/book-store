const { useEffect } = React

export function BookDetails({ book, onGoBack }) {

    useEffect(() => {
        return onGoBack
    },[])
	
	return <section className="book-details">
		<button onClick={onGoBack}>Go back</button>
		<h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
		<img src={book.thumbnail} />
		<h3>author: {book.authors}</h3>
		<h3>publishedDate: {book.publishedDate}</h3>
		<h3>description: {book.description}</h3>
		<h3>pageCount: {book.pageCount}</h3>
		<h3>categories: {book.categories}</h3>
		<h3>language: {book.language}</h3>
		<h3>price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

	</section>
}