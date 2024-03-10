const { useState } = React

import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
    const [page, setPage] = useState('home')

    return <section className="app main-layout">
        <AppHeader setPage={setPage} />
        <main class="container content-layout">  
            {page === 'home' && <Home />}
            {page === 'about' && <AboutUs />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}