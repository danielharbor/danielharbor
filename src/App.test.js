import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders dh', () => {
  render(<App />);
  const dh = screen.getByText("Daniel Harbor");
  expect(dh).toBeInTheDocument();
});

test('renders subtitle', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText(/the making of/)).toBeInTheDocument(), { timeout: 2000 });
});
