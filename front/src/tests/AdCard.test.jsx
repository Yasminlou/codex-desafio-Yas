import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdCard from '../components/AdCard';

test('renderiza anúncio corretamente', () => {
  render(<AdCard />);
  expect(screen.getByText(/Anúncio/i)).toBeInTheDocument();
});
