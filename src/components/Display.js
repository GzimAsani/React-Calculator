import PropTypes from 'prop-types';

function Display({ theResult }) {
  return (
    <div>
      {theResult}
    </div>
  );
}

Display.propTypes = {
  theResult: PropTypes.string,
};

Display.defaultProps = {
  theResult: '0',
};

export default Display;
