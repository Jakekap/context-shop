/* eslint-disable react/prop-types */
import Cart from "./Cart";
import Filter from "./Filter";

export default function Header() {
  return (
    <section>
      <h1 className="text-center my-5 text-4xl font-bold">Jakekap Shop</h1>
      <section className="flex flex-col justify-center items-center  sm:flex-row sm:gap-10">
        <Filter />
        <Cart />
      </section>
    </section>
  );
}
