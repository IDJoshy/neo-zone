import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import './styles/_app.scss'

function App() 
{
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a NeoZone, la tienda de tecnología'/>
    </>
  )
}

export default App
