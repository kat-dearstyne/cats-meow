// Import necessary modules and components
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the components for each page
import Adopt from "./components/Adopt/Adopt";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Cats from "./components/Cats/Cats";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cats" element={<Cats />} />
                <Route path="/adopt" element={<Adopt />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
