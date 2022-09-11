import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/header/Header'
import Footer from './Component/footer/Footer'
import Product from './Component/product/Product'

 const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
        <Route exact path ="/" element={<Product />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App 