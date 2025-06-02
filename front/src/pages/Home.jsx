import React, { useEffect, useState } from 'react';
import { fetchFeedPage } from '../api/feed';
import ArticleCard from '../components/ArticleCard';
import VideoCard from '../components/VideoCard';
import GroupedArticles from '../components/GroupedArticles';
import AdCard from '../components/AdCard';
import insertAds from '../utils/insertAds';
import '../styles/Home.css'

const Home = () => {
    const [feed, setFeed] = useState([]);
  
    useEffect(() => {
      const loadFeed = async () => {
        const data = await fetchFeedPage(1);
        const feedWithAds = insertAds(data);
        setFeed(feedWithAds);
      };
      loadFeed();
    }, []);
  
    const renderItem = (item, index) => {
      switch (item.type) {
        case 'materia':
          return <ArticleCard key={index} item={item} />;
        case 'video':
          return <VideoCard key={index} item={item} />;
        case 'ad':
          return <AdCard key={`ad-${index}`} />;
        default:
          return null;
      }
    };
  
    return (
      <main className="container">
        <div className="main-content">
          {feed.map((item, index) => {
            if (item.type === 'agrupador-materia') return null;
            return renderItem(item, index);
          })}
        </div>
  
      </main>
    );
  };
  
  export default Home;