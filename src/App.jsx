import Navbar from './components/Navbar/Navbar.jsx';
import Hamburger from './components/Navbar/Hamburger.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import { ToastContainer } from 'react-toastify';
import ErrorHandler from './components/Error/Error.jsx';
import './styles/_app.scss';


function App() 
{
  return (
    <div className='app app__container'>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Hamburger />

          <ToastContainer theme="dark" position="bottom-center" />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Welcome To Our Store"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Welcome To Our Store"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<ErrorHandler error={"404 Page not found"} className='error--blue'/>} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
      
    </div>
  )
}
export default App
