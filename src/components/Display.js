import PropTypes from 'prop-types';

function Display ({theResult}) {
  return (
    <div>
      {theResult}
    </div>
  )
}

Display.PropTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0'
}

export default Display;