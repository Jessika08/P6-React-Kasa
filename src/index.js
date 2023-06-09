import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About'
import Header from './components/Header'
import Error from './pages/Error'



ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/à-propos" element={<About />} />
                <Route path= "*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,

 document.getElementById("root"))
