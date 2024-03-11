const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'
import { BookDetails } from './pages/BookDetails.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'

export function App() {

    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <main className="container content-layout">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/book" element={<BookIndex />} />
                    <Route path="/book/:bookId" element={<BookDetails />} />
                </Routes>
            </main>
        </section>

        <UserMsg/>
    </Router>
}