
export function BookPreview({ book }) {
	return <article className="book-preview">
		<img src={book.thumbnail} />
		<div className='title-and-author'>
			<h2>{book.title}</h2>
			<h4>{book.authors}</h4>
		</div>
		<div className='price-and-rating hidden'>
			<h2>{book.listPrice.amount} {book.listPrice.currencyCode}</h2>
			<h4>{'****'}</h4>
		</div>
	</article>
}