/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

const initialState = {
  category: "all",
  minPrice: 0,
};

// 2. Crear el componente Provider
export const FiltersProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialState);
  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};
