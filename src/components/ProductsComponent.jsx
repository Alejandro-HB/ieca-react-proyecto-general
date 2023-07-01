import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const ProductsComponent=()=>{
    const [products, setProducts]=useState([]);
    const {getProducts}=useApi();
    useEffect(()=>{
        //getProducts().then((data)=>setProducts(data));

        const asyncProducts=async()=>{
            setProducts(await getProducts());
        }
        asyncProducts();
    },[]);


    return(
        <div>
            <h1>Products</h1>
            <ul className="flex gap-4 flex-wrap">
                {products.map((product) => (
                <li key={product.id} className="p-4 bg-white w-24">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <span>${product.price}</span>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsComponent;