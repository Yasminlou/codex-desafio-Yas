import React from 'react';
import '../styles/AdCard.css';

const AdCard = () => {
    return (
      <div className="ad-card">
        <span className="ad-label">Publicidade</span>
        <img
          src={`https://picsum.photos/600/150?random=${Math.floor(Math.random() * 1000)}`}
          alt="Anúncio"
          className="ad-image"
        />
      </div>
    );
  };
  
  export default AdCard;