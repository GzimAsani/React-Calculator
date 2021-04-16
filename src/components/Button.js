import PropTypes from 'prop-types';

function Button({ btnName }) {
<div>
  { btnName }
</div>
}

Button.propTypes = {
  btnName: PropTypes.string,
}