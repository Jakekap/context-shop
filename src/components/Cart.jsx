import { useId } from "react";
import { FaPlus, FaShoppingCart, FaMinus, FaTrash } from "../assets/icons";
import { useCart } from "../hooks/useCart";

function Cart() {
  const cartCheckboxId = useId();
  const { cart, deleteFromCart, addToCart, clearCart } = useCart();

  const isCartEmpty = cart.length === 0;

  const subTotal = cart.reduce((acumulador, producto) => {
    return acumulador + producto.price * producto.quantity;
  }, 0);

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cursor-pointer">
        <FaShoppingCart />
      </label>
      <input className="peer" type="checkbox" id={cartCheckboxId} hidden />

      <aside
        className={`fixed peer-checked:right-0 -right-96 top-0 h-screen bg-gray-400 w-96 duration-200 ease-in-out overflow-y-auto`}
      >
        <h2 className="select-none text-white text-2xl font-semibold text-center py-4">
          Cart
        </h2>
        <ul className="flex flex-col gap-5 m-5">
          {cart.map((product) => {
            return (
              <li
                key={product.id}
                className="flex list-none h-full border-gray-300 border-2 rounded-md"
              >
                <img
                  className="w-40 h-40 object-cover"
                  src={product?.thumbnail}
                  alt="iPhone"
                />
                <div className="flex flex-col items-start justify-center ml-5">
                  <h2 className="my-2 whitespace-nowrap overflow-hidden text-ellipsis w-36">
                    {product?.title}
                  </h2>
                  <span className="mt-2">Cantidad: {product?.quantity}</span>
                  <span className="mb-2">
                    ${product?.quantity * product?.price}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => deleteFromCart(product)}
                      className="w-4 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md"
                    >
                      <FaMinus color="gray" />
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-4 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md"
                    >
                      <FaPlus color="gray" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {isCartEmpty ? (
          <h2 className="text-center font-semibold">El carrito está vacío</h2>
        ) : (
          <section>
            <div className="m-5">
              <p>Total products: {cart.length}</p>
              <strong>Subtotal: ${subTotal}</strong>
            </div>
            <div className="flex justify-center gap-5">
              <button className="hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-5 hover:cursor-pointer hover:bg-gray-300 bg-gray-200 p-2 box-content rounded-md"
              >
                <FaTrash color="gray" />
              </button>
            </div>
          </section>
        )}
      </aside>
    </>
  );
}

export default Cart;
