import React from "react";
import useAuth from "../Authentication/Auth";
import authService from "../../services/AuthServices";

function Navbar() {
    const {loggedIn, user} = useAuth();

    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            await authService.logout();
            window.location = "/login"

        } catch (error) {
        }
    };
    return (
        <nav className={"parent-center"}>
            <ul className={"nav"}>
                <NavItem link="/" text="Home"/>
                <NavItem link="/cats" text="Our Cats"/>
                <NavItem link="/adopt" text="Adopt"/>
                <NavItem link="/news" text="News"/>
                <NavItem link="/contact" text="Contact"/>
                {loggedIn && !user.attributes.isAdmin && (
                    <NavItem link="/status" text="Adoption Status"/>
                )}
                {loggedIn && user.attributes.isAdmin && (
                    <NavItem link="/admin" text="Admin Board"/>
                )}
                {loggedIn && (
                    <button onClick={handleLogout} style={{ float: "right" }} className={"logout-button"}>
                        Logout
                    </button>
                )}

            </ul>
        </nav>
    );
}

function NavItem({link, text}) {
    return (
        <li>
            <a href={link}>{text}</a>
        </li>
    );
}

export default Navbar;
