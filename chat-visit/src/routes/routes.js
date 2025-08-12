import React from "react";
import Layout from "../layout/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import Features from "../pages/features";
import Login from "../pages/login";
import Pricing from "../pages/pricing";
import Register from "../pages/register";
import Resources from "../pages/resources";
const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "features", element: <Features /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "pricing", element: <Pricing /> },
            { path: "resources", element: <Resources /> },
        ],
    },
];

export default routes;