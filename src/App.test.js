import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/The Brewery Problem/i);
  expect(linkElement).toBeInTheDocument();
});

test('upload iput file', () => {
  render(<App />);

  const file = new File(['test file'], 'input.txt', {
    type: 'text/plain',
  });

  const input = screen.getByLabelText("Upload client's preferences");
  userEvent.upload(input, file);
  expect(input.files[0]).toStrictEqual(file);
  expect(input.files).toHaveLength(1);
});
