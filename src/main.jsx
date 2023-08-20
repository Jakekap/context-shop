import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filtersContext";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
);
