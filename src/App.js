import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <header style={{ flex: "0 0 auto" }}>
                <Navbar />
            </header>
            <section style={{ flex: "1 0 auto" }}>
                <AppRouter />
            </section>
            <footer style={{ flex: "0 0 auto" }}>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
