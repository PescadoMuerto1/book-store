
export function BookPreview({ book }) {
	return <article className="book-preview">
		<img src={book.thumbnail} />
		<h2>{book.title}</h2>
		<h5>author: {book.authors}</h5>
	</article>
}