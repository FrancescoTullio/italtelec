import { useState, useEffect, useMemo } from "react";

function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async (search = "") => {
    setIsLoading(true);
    try {
      const url = search 
        ? `https://italtelecback2.vercel.app/italtelec?resarc=${encodeURIComponent(search)}`
        : "https://italtelecback2.vercel.app/italtelec";
      
      const response = await fetch(url);
      const data = await response.json();
      setAllProducts(data.data);
      setMetadata(data.metadata);
      setCurrentPage(1); // Reset alla prima pagina quando si cerca
    } catch (error) {
      console.error("Error fetching products:", error);
      setAllProducts([]);
      setMetadata({});
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch iniziale
  useEffect(() => {
    fetchProducts();
  }, []);

  // Debounce per la ricerca
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProducts(searchTerm);
    }, 500); // 500ms di delay

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

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
    searchTerm,
    setSearchTerm,
    isLoading
  };
}

export default useProducts;