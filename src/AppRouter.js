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
                <Route path="/" element={ <ProtectedRoute component={Home} flag={loggedIn} />
                } />
                <Route path="/cats/*" element={
                    <ProtectedRoute component={Cats} flag={loggedIn} />
                } />
                <Route path="/adopt/*" element={
                    <ProtectedRoute component={Adopt} flag={loggedIn} />
                } />
                <Route path="/news/*" element={
                    <ProtectedRoute component={News} flag={loggedIn} />
                } />
                <Route path="/contact/*" element={
                    <ProtectedRoute component={Contact} flag={loggedIn} />
                } />
                <Route path="/login/*" element={
                    <ProtectedRoute component={Login} flag={!loggedIn} redirectTo={"/"}/>
                    // Redirect to home if logged in
                } />
                <Route path="/register/*" element={
                    <ProtectedRoute component={Register} flag={!loggedIn} redirectTo={"/"}/>
                    // Redirect to home if logged in
                } />
            </Routes>
        </Router>
    );
}

export default AppRouter;