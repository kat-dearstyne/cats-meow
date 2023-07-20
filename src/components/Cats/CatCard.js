import React from 'react'; // Import React

// Create a functional component named CatCard
const CatCard = ({ cat, index, currentIndex, likeCat, likedCatsIds }) => {
    return (
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
                    <details>
                        <summary><span className="summary-text">Details</span></summary>
                        <div className="extra-info">
                            <p><strong>Age:</strong> {cat.age}</p>
                            <p><strong>Medical History:</strong> {cat.medical}</p>
                            <p><strong>Arrived at facility:</strong> {cat.arrived}</p>
                        </div>
                    </details>
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
};

export default CatCard;
