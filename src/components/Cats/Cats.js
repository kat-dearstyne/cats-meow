import React, { useState } from "react";
import CatService from "../../services/CatService";
import useService from "../useService";
import CatCard from "./CatCard";

const Cats = () => {
    const cats = useService(CatService);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
    };

    const previousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length);
    };

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
