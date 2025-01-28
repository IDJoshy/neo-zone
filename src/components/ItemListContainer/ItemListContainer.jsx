import { useState , useEffect} from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import db from '../../db/db.js';
import { collection, getDocs, query, where } from 'firebase/firestore';

import "./_itemListContainer.scss";

const ItemListContainer = ({ greeting }) => 
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { idCategory } = useParams();
    const collectionName = collection(db, "products");

    const getProducts = async() =>
    {
        try 
        {
            const dataDb = await getDocs(collectionName);
            const data = dataDb.docs.map((productDb) => 
                {
                    return { id: productDb.id, ...productDb.data() };
                })
            
            setProducts(data);
            setLoading(false);
        }
        catch (error) 
        {
            console.log(error);
        }
    }

    const getProductsByCategory = async() =>
    {
        try 
        {
            const queryFilter = query(collectionName, where("category", "==", idCategory));
            const dataDb = await getDocs(queryFilter);
            const data = dataDb.docs.map((productDb) => 
                {
                    return { id: productDb.id, ...productDb.data() };
                })
            
            setProducts(data);
            setLoading(false);
        }
        catch (error) 
        {
            console.log(error);
        }
    }

    useEffect(() => 
    {
        setLoading(true);

        if(idCategory)
        {
            getProductsByCategory();
        }else{
            getProducts();
        }

    }, [idCategory]);

    return (
        <div className="item-list-container">
            <h1 className="item-list-container__text item-list-container__text--greeting">{greeting}</h1>
            <span className="item-list-container__line"></span>
            <span className="item-list-container__line"></span>
            {
                loading === true ? (<h2>Loading...</h2>) : (<ItemList products={products} />)
            }
        </div>
    )

}
export default ItemListContainer