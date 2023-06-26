import React from "react";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";

import Adopt from "./components/Adopt/Adopt";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Cats from "./components/Cats/Cats";

const routes = [
    {
        path: "/",
        element: <Home />,
        children: [],
    },
    {
        path: "/cats",
        element: <Cats />,
        children: [],
    },
    {
        path: "/adopt",
        element: <Adopt />,
        children: [],
    },
    {
        path: "/news",
        element: <News />,
        children: [],
    },
    {
        path: "/contact",
        element: <Contact />,
        children: [],
    },
];

const AppRouter = () => {
    const router = createBrowserRouter(routes);

    return (
        <RouterProvider router={router}>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </RouterProvider>
    );
};

export default AppRouter;
