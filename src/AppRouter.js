import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Adopt from "./components/Adopt/Adopt";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Cats from "./components/Cats/Cats";
import Login from "./components/Authentication/Login";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import useAuth from "./components/Authentication/Auth";
import Register from "./components/Authentication/Register";


function AppRouter() {
    const {loggedIn} = useAuth();

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <ProtectedRoute component={Home} loggedIn={loggedIn} />
                } />
                <Route path="/cats/*" element={
                    <ProtectedRoute component={Cats} loggedIn={loggedIn} />
                } />
                <Route path="/adopt/*" element={
                    <ProtectedRoute component={Adopt} loggedIn={loggedIn} />
                } />
                <Route path="/news/*" element={
                    <ProtectedRoute component={News} loggedIn={loggedIn} />
                } />
                <Route path="/contact/*" element={
                    <ProtectedRoute component={Contact} loggedIn={loggedIn} />
                } />
                <Route path="/login/*" element={<Login />} />
                <Route path="/register/*" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;