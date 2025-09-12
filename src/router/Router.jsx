import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodDetails from "../components/FoodDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path: '/details-page/:id',
                loader: async () => {
                    const res = await fetch('/foodItems.json');
                    const data = await res.json()
                    return data
                },
                Component: FoodDetails
            }
        ]
    }
])

export default router