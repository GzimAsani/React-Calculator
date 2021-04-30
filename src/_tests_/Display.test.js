import { create } from 'react-test-renderer';
import Display from '../components/Display';

test('renders correctly', () => {
  const tree = create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
