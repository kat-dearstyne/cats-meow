import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import * as Env from "./environment";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <header style={{ flex: "0 0 auto" }}>
                <Navbar />
            </header>
            <section id={"main"} style={{ flex: "1 0 auto" }}>
                <AppRouter />
            </section>
            <footer style={{ flex: "0 0 auto" }}>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
