
export function BookPreview({ book }) {
	return <article className="book-preview">
		<h2>{book.title}</h2>
		<img src={book.thumbnail} />
		<h5>author: {book.authors}</h5>
	</article>
}