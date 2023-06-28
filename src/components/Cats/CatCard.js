import React from "react";  // Import the React library

// Create a functional component named CatCard
const CatCard = ({ cat, index, currentIndex }) => (
    <div
        className="carousel-card"
        key={index}
        style={{
            display: index === currentIndex ? "flex" : "none"
        }}
    >
        <img className="cat-image" src={cat.image} alt={cat.name} />
        <div className="cat-details">
            <div className="cat-details-banner">
                <h2>{cat.name}</h2>  
                <p>{cat.description}</p> 
            </div>
            <a href={`/adopt?cat=${encodeURIComponent(cat.name)}`}>Adopt me!</a>                  

        </div>
    </div>
);

export default CatCard;
