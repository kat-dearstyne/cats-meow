import React, { useState } from "react";  // Import the React library and the useState hook
import CatService from "../../services/CatService";  // Import CatService module that gets data about cats
import useService from "../useService";  //utilize services like CatServic
import CatCard from "./CatCard";  //CatCard component that represents a single cat

// Create a functional component named Cats
const Cats = () => {
    //UseService for collecgting cat data
    const cats = useService(CatService);
    const [currentIndex, setCurrentIndex] = useState(0);

    //
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
    };

    const previousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length);
    };

    // Render the component
    return (
        <div id="cats">
            <h2>Meet Our Cats!</h2>
            <div className="carousel">
                <div>
                    {cats.map((cat, index) => (
                        <CatCard
                            cat={cat}
                            index={index}
                            currentIndex={currentIndex}
                            key={index}
                        />
                    ))}
                </div>
                <div className="carousel-buttons">
                    <button onClick={previousCard}>Previous</button>
                    <button onClick={nextCard}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Cats;
