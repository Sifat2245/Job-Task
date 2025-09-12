import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import FoodDetails from "../components/FoodDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children:[
            {
                path: '/details-page/:id',
                Component: FoodDetails
            }
        ]
    }
])

export default router