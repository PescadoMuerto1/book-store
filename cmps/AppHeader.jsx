const { useNavigate } = ReactRouter
const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

	const navigate = useNavigate()

	return <header className="app-header full">
		<h1 className='logo'>Book store</h1>

		<nav className="app-nav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/book">Books</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	</header>
}