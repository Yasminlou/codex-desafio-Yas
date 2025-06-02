import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ item }) => {
    return (
      <div className="video-card">
        <div className="thumbnail-wrapper">
          <img src={`https://img.youtube.com/vi/${item.video?.source}/hqdefault.jpg`} alt={item.title} className="thumbnail" />
          <span className="play-icon">▶</span>
        </div>
        <div className="video-text">
          <h3 className="video-title">{item.title}</h3>
          <p className="video-description">{item.summary}</p>
        </div>
      </div>
    );
  };
  
  export default VideoCard;