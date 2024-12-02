const ItemListContainer = ({greeting = ""}) => {
    return (
        <div>
            <h1 style={{margin: "100px"}}>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer