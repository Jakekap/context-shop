import { getProducts } from "../services/api";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  async function myData() {
    const res = await getProducts();
    setProducts(res.products);
  }
  useEffect(() => {
    myData();
  }, []);
  return products;
};
