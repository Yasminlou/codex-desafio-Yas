import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../pages/Header';

test('abre e fecha menu hamburguer', () => {
    render(<Header />);
  
    const menuButton = screen.getByRole('button', { name: /abrir menu/i });
    fireEvent.click(menuButton);
  
    expect(screen.getByText(/Início/i)).toBeInTheDocument();
  
    fireEvent.click(menuButton);
    expect(screen.queryByText(/Início/i)).not.toBeInTheDocument();
  });
