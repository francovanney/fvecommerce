import { useState, useEffect } from "react";
import commerce from "./lib/commerce";

const useCommerceData = () => {
  const [merchant, setMerchant] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const merchantData = await commerce.merchants.about();
        const { data: categoriesData } = await commerce.categories.list();
        const { data: productsData } = await commerce.products.list();

        setMerchant(merchantData);
        setCategories(categoriesData);
        setProducts(productsData);
      } catch (error) {
        console.error("There was an error fetching the data", error);
      }
    };

    fetchData();
  }, []);

  return { merchant, categories, products };
};

export default useCommerceData;
