import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail.jsx";
import { getProducts } from '../../data/data.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  useEffect(()=> {

    getProducts()
      .then( (data) => {
        const filtered = data.find((dataProduct) => String(dataProduct.id) === String(idProduct));
        setProduct(filtered)
      })

  }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer