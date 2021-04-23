import PropTypes from 'prop-types';

const Button = ({ btnName, clickHandler }) => {
  const handleClick = () => clickHandler(btnName);
  const fetchResult = (btnName) => {
    switch (btnName) {
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
    <button type="button" onClick={handleClick} classbtnName={fetchResult(btnName)}>
      {btnName}
    </button>

  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
