/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters";
import { FaCartPlus, FaMinus } from "../assets/icons";
import { useCart } from "../hooks/useCart";

export default function Products() {
  const { filteredProducts } = useFilters();
  const { cart, addToCart, deleteFromCart } = useCart();

  return (
    <ul className="flex flex-wrap justify-around gap-5 m-10">
      {filteredProducts?.map((product) => {
        const isOnTheCart = cart.some((item) => item.id === product.id);

        return (
          <li
            key={product.id}
            className="list-none w-[300px] h-full border-gray-300 border-2 rounded-md"
          >
            <h2 className="text-center my-4">{product?.title}</h2>
            <img
              className="w-full h-40 object-cover"
              src={product?.thumbnail}
              alt="iPhone"
            />
            <p className="text-center my-4">Priece: ${product.price}</p>
            <div className="flex justify-center gap-2 my-3">
              <button
                onClick={() => addToCart(product)}
                className="w-8 h-8 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md"
              >
                <FaCartPlus color="gray" />
              </button>
              {isOnTheCart && (
                <button
                  onClick={() => deleteFromCart(product)}
                  className="w-8 h-8 flex items-center hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md"
                >
                  <FaMinus color="gray" />
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
