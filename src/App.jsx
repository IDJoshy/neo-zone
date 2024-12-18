import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import './styles/_app.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() 
{
  return (
    <div className='app app__container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={""} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={""} />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
