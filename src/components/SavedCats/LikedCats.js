import React, { useState, useEffect } from 'react';
import LikedCatsService from '../../services/LikedCatsService';
import useAuth from '../Authentication/Auth';
import CatsList from '../Dashboard/CatsList'; // You will need to create this component to display a list of cats
import SelectedCat from '../Dashboard/SelectedCat'; // You will need to create this component to display a selected cat

const LikedCats = () => {
    const [selectedCat, setSelectedCat] = useState(null);
    const [likedCats, setLikedCats] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchLikedCats = async () => {
            const cats = await LikedCatsService.getLikedCatsByUser(user.id);
            setLikedCats(cats);
        };

        fetchLikedCats();
    }, [user]);

    const handleCatClick = (cat) => {
        setSelectedCat(cat);
    };

    return (
        <div id="dashboard-page">
            <h2 style={{ fontSize: '24px' }}>Saved Cats</h2>
            {likedCats.length === 0 ? (
                <p>No liked cats found.</p>
            ) : (
                <CatsList cats={likedCats} selectedCat={selectedCat} handleCatClick={handleCatClick} />
            )}

            {selectedCat && (
                    <SelectedCat selectedCat={selectedCat} />
            )}
        </div>
    );
};

export default LikedCats;