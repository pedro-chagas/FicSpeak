import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Welcome from "../pages/login";
import Name from "../pages/login/name";
import Interests from "../pages/login/interests";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Welcome />,
    },
    {
        path: "/login/name",
        element: <Name />,
    },
    {
        path: "/login/interests",
        element: <Interests />,
    },
]);

export default router;
