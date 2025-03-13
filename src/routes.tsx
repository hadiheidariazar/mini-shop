import { lazy, Suspense } from "react";
import Loading from "./Components/Loading/Loading";
const LazyProducts = lazy(() => import("./Pages/Home/Products"))
const LazyCart = lazy(() => import("./Pages/Cart/Cart"))

const routes = [
    {
        path: "/", element:
            <Suspense fallback={<Loading isFullPage={true} />}>
                <LazyProducts />
            </Suspense>
    },
    { path: "/cart", element:
        <Suspense fallback={<Loading isFullPage={true} />}>
            <LazyCart />
        </Suspense>
    }
]

export default routes