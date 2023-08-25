import { render, screen } from '@testing-library/react';
import Button from '../components/reuseables/Button';

it('should render text that was passed into Button prop', () => {
  render(<Button  title="Search"/>);
  const buttonElement = screen.getByRole('button', {name:/Search/i});
  expect(buttonElement).toBeInTheDocument();
});