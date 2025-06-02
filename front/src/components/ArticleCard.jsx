import React from 'react';
import '../styles/ArticleCard.css';

const ArticleCard = ({ item }) => {
    return (
      <a className="article-card" href={item.url} target="_blank" rel="noopener noreferrer">
        {item.image && <img src={item.image} alt={item.title} className="article-image" />}
        <div className="article-content">
          <span className="article-label">{item.chapeu || item.section}</span>
          <h2 className="article-title">{item.title}</h2>
          <p className="article-summary">{item.summary}</p>
        </div>
      </a>
    );
  };
  
  export default ArticleCard;
