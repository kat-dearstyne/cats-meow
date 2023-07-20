import React from 'react';

const CatsList = ({ cats, handleCatClick }) => {
    return (
      <div>
        {cats.map((cat, index) => (
          <div key={index} onClick={() => handleCatClick(cat)}>
            <p>{cat.get('name')}</p>
            <p>{cat.get('description')}</p>
            <img 
              src={cat.get('image')} 
              alt={cat.get('name')} 
              style={{maxWidth: "300px", maxHeight: "300px"}}
            />
          </div>
        ))}
      </div>
    );
  };

export default CatsList;
