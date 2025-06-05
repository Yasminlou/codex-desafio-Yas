import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleCard from './ArticleCard';

const mockItem = {
  chapeu: "Notícias",
  title: "Título da matéria",
  summary: "Resumo da matéria",
  image: "https://via.placeholder.com/300",
  url: "https://g1.globo.com",
};

test('renderiza a matéria com título, resumo e imagem', () => {
  render(<ArticleCard item={mockItem} />);
  
  expect(screen.getByText(/Título da matéria/i)).toBeInTheDocument();
  expect(screen.getByText(/Resumo da matéria/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('src', mockItem.image);
});
