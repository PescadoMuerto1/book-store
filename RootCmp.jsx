import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
    return <section className="app main-layout">
        <AppHeader/>
        <main class="container content-layout">
            {/* <Home/> */}
            {/* <AboutUs /> */}
            <BookIndex />
        </main>
    </section>
}