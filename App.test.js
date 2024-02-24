import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './src/App';

test('renders GetToDoItem component', () => {
render(<App />);
const linkElement = screen.getByText('My To Do Items');
expect(linkElement).toBeInTheDocument();
});