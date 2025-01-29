import {useState, useEffect} from 'react';
import ItemDetail from "./ItemDetail.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from '../../db/db.js';
import { useParams } from 'react-router-dom';
import ErrorHandler from '../Error/Error.jsx';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  const [error, setError] = useState(false);

  const getProducts = async () =>
  {
    try
    {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if(dataDb.exists())
      {
        const data = { id: dataDb.id, ...dataDb.data() }
        setProduct(data);
        setError(false);
      }
      else
      {
        setError(true);
      }

    }
    catch(error)
    {
      console.log("Error in displaying product: ", error);
      setError(true);
    }

  }

  useEffect(()=> 
  {

    getProducts();

  }, [idProduct])



  if(error)
  {
    return (
      <ErrorHandler error="Product not found or doesn't exist [404]" className='error--red'/>
    )
  }

  if(!product)
  {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer