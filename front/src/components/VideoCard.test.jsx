import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoCard from './VideoCard';
import '@testing-library/jest-dom';


const videoItem = {
  title: "Vídeo Teste",
  summary: "Descrição do vídeo",
  video: {
    source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  }
};

test('abre o modal ao clicar no card de vídeo', async () => {
  render(<VideoCard item={videoItem} />);
  fireEvent.click(screen.getByText(/Vídeo Teste/i));

  const modal = await screen.findByTestId('video-modal');
  expect(modal).toBeInTheDocument();
});

