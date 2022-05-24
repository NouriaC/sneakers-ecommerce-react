import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { products_url as url } from "../utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const fetchProducts = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setProducts(data.products);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const fetchSingleProduct = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setSingleProduct(data.product);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        setSearchTerm,
        searchTerm,
        isLoading,
        error,
        products,
        fetchSingleProduct,
        singleProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
