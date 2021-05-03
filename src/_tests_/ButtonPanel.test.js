import { create } from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

test('render correctly', () => {
  const handleClick = () => { ''; };
  const tree = create(<ButtonPanel clickHandler={handleClick} name="" />);
  expect(tree).toMatchSnapshot();
});
