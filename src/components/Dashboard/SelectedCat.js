import React from 'react';

const SelectedCat = ({ cat }) => {
  return (
    <div>
      <h2>{cat.get('name')}</h2>
      <img src={cat.get('image')} alt={cat.get('name')} />
      <p>{cat.get('description')}</p>
    </div>
  );
};

export default SelectedCat;