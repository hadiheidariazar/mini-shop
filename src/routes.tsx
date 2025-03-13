import { lazy, Suspense } from "react";
const LazyProducts = lazy(() => import("./Pages/Home/Products"))
const LazyCart = lazy(() => import("./Pages/Cart/Cart"))

const routes = [
    {
        path: "/", element:
            <Suspense fallback={<h2> Loading... </h2>}>
                <LazyProducts />
            </Suspense>
    },
    { path: "/cart", element:
        <Suspense fallback={<h2> Loading... </h2>}>
            <LazyCart />
        </Suspense>
    }
]

export default routes