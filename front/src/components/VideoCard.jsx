import React, {useState}from 'react'
import VideoModal from './VideoModal';
import '../styles/VideoCard.css';

const VideoCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="video-card" onClick={() => setOpen(true)}>
        <img
          src={`https://img.youtube.com/vi/${item.video?.source?.split('/').pop()}/0.jpg`}
          alt={item.title}
          className="video-thumbnail"
          onError={(e) => {
            e.target.src = item.image || 'https://via.placeholder.com/400x225';
          }}
        />
        <div className="video-content">
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </div>
      </div>

      {open && (
        <VideoModal
          videoUrl={item.video.source}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default VideoCard;