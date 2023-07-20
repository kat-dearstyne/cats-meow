import React from 'react';

const CatsList = ({ cats, handleCatClick }) => {
  return (
    <div>
      {cats.map((cat, index) => (
        <div key={index} onClick={() => handleCatClick(cat)}>
          <h2>{cat.get('name')}</h2>
          <img src={cat.get('image')} alt={cat.get('name')} />
          <p>{cat.get('description')}</p>
        </div>
      ))}
    </div>
  );
};

export default CatsList;
