import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore"
import data from "../data/data.json" assert { type: "json" }

const products = [
    {
        "id": 1,
        "title": "Plugin 1",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 10,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 2,
        "title": "Plugin 2",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 4,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 3,
        "title": "Plugin 3",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 5,
        "image": "",
        "category": "plugins"
    },
    {
        "id": 4,
        "title": "Asset 1",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 17,
        "image": "",
        "category": "assets"
    },
    {
        "id": 5,
        "title": "Asset 2",
        "description": "",
        "preview": "",
        "price": 800,
        "stock": 2,
        "image": "",
        "category": "assets"
    },
    {
        "id": 6,
        "title": "Asset 3",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "assets"
    },
    {
        "id": 7,
        "title": "Commission 1",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 8,
        "title": "Commission 2",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 9,
        "title": "Commission 3",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "commissions"
    },
    {
        "id": 10,
        "title": "Course 1",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "courses"
    },
    {
        "id": 11,
        "title": "Course 2",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "",
        "category": "courses"
    },
    {
        "id": 12,
        "title": "Course 3",
        "description": "",
        "preview": "",
        "price": 1,
        "stock": 6,
        "image": "https://extensions.blender.org/media/images/a1/a126ac29cc2a7acdfdddf39e66d20b7f391976caad2195e1ff8ef11ea1a78a30.png",
        "category": "courses"
    }
]

const seedProducts = async() => 
{
    try
    {
        const productsRef = collection(db, "products");

        products.map( async( { id, ...dataProduct } ) => {
            await addDoc(productsRef, dataProduct)
        });
    
      console.log("Products seeded");
    }
    catch(error)
    {
      console.log(error);
    }
}
  
seedProducts();