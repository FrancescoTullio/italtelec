import { useState, useEffect, useMemo } from "react";

function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await fetch("italtelecback.vercel.app/italtelec");
      const data = await response.json();
      setAllProducts(data.data);
      setMetadata(data.metadata);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Memoizza i prodotti della pagina corrente
  const currentProducts = useMemo(() => {
    return allProducts.filter(product => product.page === currentPage);
  }, [allProducts, currentPage]);

  return { 
    products: currentProducts,
    allProducts,
    metadata, 
    currentPage, 
    setCurrentPage,
    isLoading: allProducts.length === 0
  };
}

export default useProducts;