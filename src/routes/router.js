import * as React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Welcome from "../pages/login";
import Name from "../pages/login/name";
import Interests from "../pages/login/interests";
import NotFound from "../pages/not_found";
import Home from "../pages/home";
import CreateCharacter from "../pages/create_character";    

import CreateExistenting from "../pages/create_character/existent";
import CreateExistentingUniverse from "../pages/create_character/existent/character_universe";
import CreateExistentingResponse from "../pages/create_character/existent/response";
import CreateExistentingHistory from "../pages/create_character/existent/history";
import CreateExistentingAvatar from "../pages/create_character/existent/avatar";
import CreateExistentingPersonality from "../pages/create_character/existent/personality";
import CreateExistentingWallpaper from "../pages/create_character/existent/wallpaper";

import CreateFamous from "../pages/create_character/famous";
import CreateFamousResponse from "../pages/create_character/famous/response";
import CreateFamousAvatar from "../pages/create_character/famous/avatar";
import CreateFamousDetils from "../pages/create_character/famous/details";
import CreateFamousPersonality from "../pages/create_character/famous/personality";
import CreateFamousWallpaper from "../pages/create_character/famous/wallpaper";
import CreateFamousNacionality from "../pages/create_character/famous/nacionality";

import CreateCustom from "../pages/create_character/custom";
import CreateCustomResponse from "../pages/create_character/custom/response";
import CreateCustomAvatar from "../pages/create_character/custom/avatar";
import CreateCustomPersonality from "../pages/create_character/custom/personality";
import CreateCustomHistory from "../pages/create_character/custom/history";
import CreateCustomWallpaper from "../pages/create_character/custom/wallpaper";

import Chat from "../pages/chat";

const isAuthenticated = () => {
    const name = localStorage.getItem("name");

    if (!name) {
        return redirect("/login");
    }

    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        loader: isAuthenticated,
        element: <Home />,
    },
    {
        path: "/create",
        loader: isAuthenticated,
        element: <CreateCharacter />,
    },
    {
        path: "/FicSpeak",
        loader: isAuthenticated,
        element: <Home />,
    },
    {
        path: "/create/existent",
        loader: isAuthenticated,
        element: <CreateExistenting />,
    },
    {
        path: "/create/existent/universe",
        loader: isAuthenticated,
        element: <CreateExistentingUniverse />,
    },
    {
        path: "/create/existent/response",
        loader: isAuthenticated,
        element: <CreateExistentingResponse />,
    },
    {
        path: "/create/existent/history",
        loader: isAuthenticated,
        element: <CreateExistentingHistory />,
    },
    {
        path: "/create/existent/personality",
        loader: isAuthenticated,
        element: <CreateExistentingPersonality />,
    },
    {
        path: "/create/existent/wallpaper",
        loader: isAuthenticated,
        element: <CreateExistentingWallpaper />,
    },
    {
        path: "/create/existent/avatar",
        loader: isAuthenticated,
        element: <CreateExistentingAvatar />,
    },
    {
        path: "/create/existent",
        loader: isAuthenticated,
        element: <CreateFamous />,
    },
    {
        path: "/create/famous/",
        loader: isAuthenticated,
        element: <CreateFamous />,
    },
    {
        path: "/create/famous/response",
        loader: isAuthenticated,
        element: <CreateFamousResponse />,
    },
    {
        path: "/create/famous/personality",
        loader: isAuthenticated,
        element: <CreateFamousPersonality />,
    },
    {
        path: "/create/famous/details",
        loader: isAuthenticated,
        element: <CreateFamousDetils />,
    },
    {
        path: "/create/famous/nacionality",
        loader: isAuthenticated,
        element: <CreateFamousNacionality />,
    },
    {
        path: "/create/famous/wallpaper",
        loader: isAuthenticated,
        element: <CreateFamousWallpaper />,
    },
    {
        path: "/create/famous/avatar",
        loader: isAuthenticated,
        element: <CreateFamousAvatar />,
    },
    {
        path: "/create/custom",
        loader: isAuthenticated,
        element: <CreateCustom />,
    },
    {
        path: "/create/custom/response",
        loader: isAuthenticated,
        element: <CreateCustomResponse />,
    },
    {
        path: "/create/custom/personality",
        loader: isAuthenticated,
        element: <CreateCustomPersonality />,
    },
    {
        path: "/create/custom/history",
        loader: isAuthenticated,
        element: <CreateCustomHistory />,
    },
    {
        path: "/create/custom/wallpaper",
        loader: isAuthenticated,
        element: <CreateCustomWallpaper />,
    },
    {
        path: "/create/custom/avatar",
        loader: isAuthenticated,
        element: <CreateCustomAvatar />,
    },
    {
        path: "/chat/:id",
        loader: isAuthenticated,
        element: <Chat />,
    },
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
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
