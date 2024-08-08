async function getProducts()
{
    try{
        const res=await fetch("https://dummyjson.com/products")
        const products=await res.json(products.products);
        
    }
}
