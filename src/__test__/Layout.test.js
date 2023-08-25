import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout.js';

it('should render text that was passed into Layout prop', () => {
  render(<Layout  text="Testing Layout prop"/>);
  const linkElement = screen.getByText(/Testing Layout prop/i);
  expect(linkElement).toBeInTheDocument();
});