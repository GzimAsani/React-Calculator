import PropTypes from 'prop-types';

export default function Button({ name, clickHandler }) {
  const handleClick = () => clickHandler(name);

  return (
    <button type="button" onClick={handleClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
