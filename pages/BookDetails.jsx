
const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { bookService } from "../services/book.service.js"

export function BookDetails() {
	const [book, setBook] = useState(null)
	const params = useParams()
	const navigate = useNavigate()

    
	useEffect(() => {
		loadBook()
	}, [])

	function loadBook() {
		bookService.get(params.bookId)
			.then(book => {setBook(book); console.log(book);})
			.catch(err => {
				console.log('Had issues loading book', err)
				navigate('/book')
			})
	}

	if(!book) return <div>Loading details..</div>
	return <section className="book-details">
		{/* <button onClick={onGoBack}>Go back</button> */}
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