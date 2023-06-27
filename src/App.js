// Import necessary modules and components
import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import * as Env from "./environment";
import Parse from "parse";

// Initialize Parse with application id and javascript key from environment variables
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
// Set Parse server URL from environment variables
Parse.serverURL = Env.SERVER_URL;

function App() {
    return (
        // This creates a flex container with column direction.  The height is set at 
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Header section for Navbar. The flex property is used to specify the size of the component */}
            <header style={{ flex: "0 0 auto" }}>
                <Navbar />
            </header>
            {/* Main content section where different routes are rendered. It grows to take up all available space in the container */}
            <section id={"main"} style={{ flex: "1 0 auto" }}>
                <AppRouter />
            </section>
            {/* Footer section for Footer. The flex property is used to specify the size of the component */}
            <footer style={{ flex: "0 0 auto" }}>
                <Footer />
            </footer>
        </div>
    );
}

// Export the App component to be used in other parts of the application
export default App;
