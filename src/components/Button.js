import PropTypes from 'prop-types';

function Button({ btnName }) {
  return (
    <div>
      { btnName }
    </div>
  );
}

Button.propTypes = {
  btnName: PropTypes.string,
};

Button.defaultProps = {
  btnName: '',
};

export default Button;
