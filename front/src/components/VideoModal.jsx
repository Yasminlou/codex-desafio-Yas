import React from 'react';
import '../styles/VideModal.css'

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="modal-overlay"  data-testid="video-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <video controls autoPlay src={videoUrl} />
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default VideoModal;
