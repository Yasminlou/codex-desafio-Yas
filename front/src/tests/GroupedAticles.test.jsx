import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupedArticles from '../components/GroupedArticles';

const groupedItem = {
  title: 'Agrupador de Matérias',
  group: [
    { title: 'Matéria 1', url: 'https://g1.globo.com' },
    { title: 'Matéria 2', url: 'https://g1.globo.com' }
  ]
};

test('renderiza título e matérias agrupadas', () => {
  render(<GroupedArticles item={groupedItem} />);
  expect(screen.getByText(/Agrupador de Matérias/i)).toBeInTheDocument();
  expect(screen.getByText(/Matéria 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Matéria 2/i)).toBeInTheDocument();
});
