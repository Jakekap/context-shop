/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters";

export default function Filter() {
  const { filter, setFilter } = useFilters();

  const handleChangeMinPrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleSelectCategory = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="flex justify-evenly my-10">
      <div className="flex justify-center items-center">
        <label htmlFor="price">Precio mínimo: </label>
        <input
          className="mx-2"
          onChange={handleChangeMinPrice}
          type="range"
          min="0"
          max="1000"
          value={filter.minPrice}
          id="price"
        />
        <span className="min-w-[50px]">${filter.minPrice}</span>
      </div>
      <div>
        <label htmlFor="price">Categoría: </label>
        <select
          className="px-2 py-1 border border-gray-300 rounded-md shadow-sm"
          name="category"
          id="category"
          onChange={handleSelectCategory}
        >
          <option value="all">Todas</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
}
