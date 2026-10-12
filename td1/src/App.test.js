import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the app components', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /débuter avec react/i })).toBeInTheDocument();
  expect(screen.getByText('Icône')).toBeInTheDocument();
  expect(screen.getByText('Pictogramme')).toBeInTheDocument();
  expect(screen.getByLabelText('Votre commentaire')).toBeInTheDocument();
  expect(screen.getByText('120 caractères restants')).toBeInTheDocument();
});

test('updates the remaining comment character count', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Votre commentaire'), {
    target: { value: 'Bonjour' },
  });

  expect(screen.getByText('113 caractères restants')).toBeInTheDocument();
});
