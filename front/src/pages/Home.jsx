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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // controla se ainda há dados

  const loadFeed = async (pageToLoad = 1) => {
    const data = await fetchFeedPage(pageToLoad);

    if (!data || data.length === 0) {
      setHasMore(false);
      return;
    }

    const newItems = insertAds(data);
    setFeed((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    loadFeed(page);
  }, [page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const renderItem = (item, index) => {
    if (item.video) {
      return <VideoCard key={index} item={item} />;
    }
  
    switch (item.type) {
      case 'materia':
        return <ArticleCard key={index} item={item} />;
      case 'agrupador-materia':
        return <GroupedArticles key={index} item={item} />;
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

        {/* Botão de Paginação */}
        {hasMore && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={handleLoadMore}>
              Ver mais
            </button>
          </div>
        )}
      </div>

      <div className="sidebar">
        {feed
          .filter((item) => item.type === 'agrupador-materia')
          .map((item, index) => (
            <GroupedArticles key={index} item={item} />
          ))}
      </div>
    </main>
  );
};

export default Home;