import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Welcome from "../pages/login";
import Name from "../pages/login/name";

// function isAuthenticated() {
//     const user = localStorage.getItem("user");
//     if (!user) {
//         return redirect("/login");
//     }
//     return null;
// }

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Welcome />,
    },
    {
        path: "/login/name",
        element: <Name />,
    },
    // {
    //     path: "/home",
    //     element: <Home />,
    //     loader: isAuthenticated,
    // },
]);

export default router;
