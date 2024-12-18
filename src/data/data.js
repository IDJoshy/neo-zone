const products = [
    {
        "id": 1,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 10,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 2,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 4,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 3,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 5,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 4,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 17,
        "image": "",
        "category": "assets"
    },
    {
        "id": 5,
        "title": "",
        "description": "",
        "preview": "",
        "price": 800,
        "stock": 2,
        "image": "",
        "category": "assets"
    },
    {
        "id": 6,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "assets"
    },
    {
        "id": 7,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 8,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 9,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 10,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "courses"
    },
    {
        "id": 11,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "courses"
    },
    {
        "id": 12,
        "title": "",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "https://extensions.blender.org/media/images/a1/a126ac29cc2a7acdfdddf39e66d20b7f391976caad2195e1ff8ef11ea1a78a30.png",
        "category": "courses"
    }
]

const getProducts = () => 
{
    return new Promise( (resolve, reject) => 
    {
        setTimeout(() => {
            resolve(products);
        }, 2000);
        
    })
}

export { getProducts }