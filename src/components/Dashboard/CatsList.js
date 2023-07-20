import React from 'react';

  const CatsList = ({ cats, handleCatClick }) => {
  return (
    <div>
      {cats.map((cat, index) => (
        <div key={index} onClick={() => handleCatClick(cat)} className="cat-card">
          <h2 className="cat-name">{cat.get('name')}</h2>
          <h2 className="cat-status">{cat.get('status')}</h2>
          <img 
              src={cat.get('image')} 
              alt={cat.get('name')} 
              style={{maxWidth: "300px", maxHeight: "300px"}}
            />
          <p className="cat-description">{cat.get('description')}</p>
        </div>
      ))}
    </div>
  );
};

export default CatsList;
