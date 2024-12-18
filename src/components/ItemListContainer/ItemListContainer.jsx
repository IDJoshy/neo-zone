import { useState , useEffect} from 'react';
import { getProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from 'react-router-dom';
import "./_itemListContainer.scss";

const ItemListContainer = ({ greeting }) => 
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {idCategory} = useParams();

    useEffect(() => 
    {
        setLoading(true);

        getProducts()
        .then((data) =>
        {
            if(idCategory)
            {
                const filtered = data.filter((product) => String(product.category) === String(idCategory));
                setProducts(filtered);
            }
            else
            {
                setProducts(data);
            }
            
        })
        .catch((error) => { console.log(error)})
        .finally(() => 
        {
            setLoading(false);
        });

    }, [idCategory]);

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            {
                loading === true ? (<h2>Loading...</h2>) : (<ItemList products={products} />)
            }
        </div>
    )

}
export default ItemListContainer