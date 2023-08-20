import { useContext } from "react";
import { useGetProducts } from "./getProducts";
import { FiltersContext } from "../context/filtersContext";

export function useFilters() {
  const products = useGetProducts();
  const { filter, setFilter } = useContext(FiltersContext);
  const filteredProducts = products?.filter((product) => {
    return (
      product.price >= filter.minPrice &&
      (product.category === filter.category || filter.category === "all")
    );
  });
  return { filter, filteredProducts, setFilter };
}
