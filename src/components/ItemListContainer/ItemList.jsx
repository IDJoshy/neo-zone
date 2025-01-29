import Item from "./Item"
import ItemSkeleton from "./ItemSkeleton";

const ItemList = ({ products, loading }) => {
  return (
    <div className="item-list-container__list">
      {
        loading ? Array(6).fill().map((_, index) => <ItemSkeleton key={index} />) : products.map((product) => <Item product={product} key={product.id} />)
      }

      {/* For testing purposes
      {
        Array(6).fill().map((_, index) => <ItemSkeleton key={index} />)
      } 
      */}
      
    </div>
  )
}
export default ItemList

// {
//   products.map((product) => (
//     <Item product={product} key={product.id} />
//   ))
// }