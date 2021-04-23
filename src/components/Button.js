import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = () => clickHandler(name);
  const fetchResult = (name) => {
    switch (name) {
      case '0':
        return 'Button zero';
      case '+':
      case '-':
      case 'x':
      case '/':
      case '=':
        return 'Button operator';
      default:
        return 'Button';
    }
  };
  return (
    <button type="button" onClick={handleClick} className={fetchResult(name)}>
      {name}
    </button>

  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
