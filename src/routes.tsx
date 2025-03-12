import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Home/Products";

const routes = [
    { path: "/", element: <Products /> },
    { path: "/cart", element: <Cart /> }
]

export default routes