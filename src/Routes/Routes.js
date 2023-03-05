import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";

import EditUser from "../Pages/EditUser/EditUser";
import AddUser from "../Pages/AddUser/AddUser";

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
                path: "/editUser/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/users/get/${params.id}`),
                element: <EditUser />
            },
            {
                path: "/addUser",

                element: <AddUser />
            },
        ]
    }
])