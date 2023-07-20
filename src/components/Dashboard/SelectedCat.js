import React from 'react';

const SelectedCat = ({ selectedCat }) => {
    return (
        <div>
            <h2>{selectedCat.get('name')}</h2>
            <img src={selectedCat.get('image')} alt={selectedCat.get('name')} style={{maxWidth: "50px", maxHeight: "50px"}}/>
            <p>{selectedCat.get('description')}</p>
        </div>
    );
};

export default SelectedCat;