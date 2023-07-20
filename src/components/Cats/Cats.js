import React, { useState, useEffect } from "react";  // Import the React library, the useState hook, and the useEffect hook
import CatService from "../../services/CatService";  // Import CatService module that gets data about cats
import useService from "../useService";  //utilize services like CatServic
import CatCard from "./CatCard";  //CatCard component that represents a single cat
import LikedCatsService from "../../services/LikedCatsService";
import useAuth from "../Authentication/Auth";


// Create a functional component named Cats
const Cats = () => {
    const { user } = useAuth();
    //UseService for collecgting cat data
    const cats = useService(CatService);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedCatsIds, setLikedCatsIds] = useState([]);

    useEffect(() => {
        const fetchLikedCats = async () => {
            const likedCats = await LikedCatsService.getLikedCatsByUser(user.id);
            setLikedCatsIds(likedCats.map(cat => cat.id));
        }
        fetchLikedCats();
    }, [user]);


    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
    };

    const previousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length);
    };

    const likeCat = async (cat) => {
        setLikedCatsIds([...likedCatsIds, cat.id]);
        try {
            await LikedCatsService.createObject({user: user.id, cat: cat.id});
        } catch (error) {
            console.error(error);
        }
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
                            likeCat={likeCat}
                            likedCatsIds={likedCatsIds}  // Pass likedCatsIds as a prop
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