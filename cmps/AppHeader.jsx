

export function AppHeader() {

	// function onSetPage(ev, page) {
	// 	ev.preventDefault()
	// 	setPage(page)
	// }

	return <header className="app-header full">
		<h1 className='logo'>Book store</h1>

		<nav className="app-nav">
			<a href="" onClick={(ev) => onSetPage(ev, 'home')} >Home</a>
			<a href="" onClick={(ev) => onSetPage(ev, 'books')}>Books</a>
			<a href="" onClick={(ev) => onSetPage(ev, 'about')} >About</a>
		</nav>
	</header>
}