import React from "react";  // Import the React library

// Create a functional component named CatCard
const CatCard = ({ cat, index, currentIndex, likeCat, likedCatsIds }) => (  // Receive likedCatsIds as a prop
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
            <div className="cat-actions">
                <a className="cat-action-button" href={`/adopt?cat=${encodeURIComponent(cat.name)}`}>Adopt me!</a>
                <button className="cat-action-button" onClick={() => likeCat(cat)} disabled={likedCatsIds.includes(cat.id)}>
                    {likedCatsIds.includes(cat.id) ? "Cat Saved" : "Save to My Cats"}
                </button>
            </div>
        </div>
    </div>
);

export default CatCard;