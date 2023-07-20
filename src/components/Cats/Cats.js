import React, { useState, useEffect } from "react";
import CatService from "../../services/CatService";
import LikedCatsService from "../../services/LikedCatsService";
import useService from "../useService";
import CatCard from "./CatCard";
import useAuth from '../Authentication/Auth';

const Cats = () => {
    const cats = useService(CatService);
    const { user } = useAuth();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedCats, setLikedCats] = useState([]);

    useEffect(() => {
        const fetchLikedCats = async () => {
            if (user) {
                const userLikedCats = await LikedCatsService.getLikedCatsForUser(user.id);
                setLikedCats(userLikedCats);
            }
        };
        fetchLikedCats();
    }, [user]);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length);
    };

    const previousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cats.length) % cats.length);
    };

    const likeCat = async (cat) => {
        if (!isCatLiked(cat)) {
            await LikedCatsService.createObject({ user: user.id, cat: cat.id });
            setLikedCats([...likedCats, cat.id]); // Update local likedCats state
        }
      };
    
      const unlikeCat = async (cat) => {
        if (isCatLiked(cat)) {
            await LikedCatsService.createObject({ user: user.id, cat: cat.id });
            setLikedCats(likedCats.filter(likedCatId => likedCatId !== cat.id)); // Update local likedCats state
        }
      };

    const isCatLiked = (cat) => likedCats.includes(cat.id);

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
                            unlikeCat={unlikeCat}
                            isLiked={isCatLiked(cat)}
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
