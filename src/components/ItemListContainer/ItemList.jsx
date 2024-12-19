import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container__list">
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}
export default ItemList