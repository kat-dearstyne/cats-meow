import React, { useState } from 'react';
import LikedCatsService from '../../services/LikedCatsService';
import useService from '../useService';
import useAuth from '../Authentication/Auth';
import CatsList from '../Dashboard/CatsList'; // You will need to create this component to display a list of cats
import SelectedCat from '../Dashboard/SelectedCat'; // You will need to create this component to display a selected cat

const LikedCats = () => {
    const [selectedCat, setSelectedCat] = useState(null);
    const { user } = useAuth();

    const transformData = (response) => response;
    const cats = useService(LikedCatsService, transformData, 'user', user.id);

    const handleCatClick = (cat) => {
        setSelectedCat(cat);
    };

    return (
        <div id="dashboard-page">
            <h2 style={{ fontSize: '24px' }}>Saved Cats</h2>
            {cats.length === 0 ? (
                <p>No liked cats found.</p>
            ) : (
                <CatsList cats={cats} selectedCat={selectedCat} handleCatClick={handleCatClick} />
            )}

            {selectedCat && (
                    <SelectedCat selectedCat={selectedCat} />
            )}
        </div>
    );
};

export default LikedCats;
