import { useState } from 'react'
import './App.css'
import About from './components/about'
import Product from './components/Product'
import Service from './components/Service'
import Home from './components/Home'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Header from './components/Header'



function App() {

  return (
    <>

    <BrowserRouter>
   <Header />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Product' element={<Product/>}/> 
        <Route path='/Service' element={<Service/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
