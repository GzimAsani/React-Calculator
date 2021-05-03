import { create } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays number', () => {
  render(<App />);
  const button = screen.getByText('5');
  expect(button).toBeInTheDocument();
});

test('dispaly operators', () => {
  render(<App />);
  const button = screen.getByText(/\+$/i);
  expect(button).toBeInTheDocument();
});

test('display output of calculation', () => {
  render(<App />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('x'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  const output = screen.getByText('20');
  expect(output).toBeInTheDocument();
});

test('clears display on clicking AC button', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('x'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  fireEvent.click(screen.getByText('AC'));
  const zeros = await screen.findAllByText('0');
  expect(zeros).toHaveLength(2);
});
