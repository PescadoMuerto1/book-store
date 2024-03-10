import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
        </header>
        <main class="container">
            {/* <Home/> */}
            {/* <AboutUs /> */}
            <BookIndex />
        </main>
    </section>
}