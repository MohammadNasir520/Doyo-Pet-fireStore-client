import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import AddUser from "../Pages/AddUser/AddUser";
import EditUser from "../Pages/EditUser/EditUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addUser",
                element: <AddUser />
            },
            {
                path: "/editUser/:id",
                loader: ({ params }) => fetch(`https://doyo-pet-fire-store.vercel.app/users/${params.id}`),
                element: <EditUser />
            },
        ]
    }
])