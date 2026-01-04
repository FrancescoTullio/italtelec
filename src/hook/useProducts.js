import { useState, useEffect } from "react";

function useProducts() {
    const [products, setProducts] = useState([]);

    
    const fetchProducts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:3004/italtelec");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return products;
}



export default useProducts;