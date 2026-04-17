// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CelestiaBlob title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CelestiaBlob/i);
    expect(titleElement).toBeInTheDocument();
});
