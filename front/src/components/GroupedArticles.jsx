import React from 'react';
import '../styles/GroupedArticles.css';

const GroupedArticles = ({ item }) => {
    return (
      <div className="grouped-articles">
        <h3>{item.title || 'Agrupador de Notícias'}</h3>
        <ul>
          {item.group.map((article, idx) => (
            <li key={idx}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GroupedArticles;