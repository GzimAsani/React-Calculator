import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonbtnName) => clickHandler(buttonbtnName);
  return (
    <div classbtnName="component-button-panel">
      <div classbtnName="group-1">
        <Button btnName="AC" clickHandler={handleClick} />
        <Button btnName="+/-" clickHandler={handleClick} />
        <Button btnName="%" clickHandler={handleClick} />
        <Button btnName="/" clickHandler={handleClick} />
      </div>
      <div classbtnName="group-2">
        <Button btnName="7" clickHandler={handleClick} />
        <Button btnName="8" clickHandler={handleClick} />
        <Button btnName="9" clickHandler={handleClick} />
        <Button btnName="x" clickHandler={handleClick} />
      </div>
      <div classbtnName="group-3">
        <Button btnName="4" clickHandler={handleClick} />
        <Button btnName="5" clickHandler={handleClick} />
        <Button btnName="6" clickHandler={handleClick} />
        <Button btnName="-" clickHandler={handleClick} />
      </div>
      <div classbtnName="group-4">
        <Button btnName="1" clickHandler={handleClick} />
        <Button btnName="2" clickHandler={handleClick} />
        <Button btnName="3" clickHandler={handleClick} />
        <Button btnName="+" clickHandler={handleClick} />
      </div>
      <div classbtnName="group-5">
        <Button btnName="0" clickHandler={handleClick} />
        <Button btnName="." clickHandler={handleClick} />
        <Button btnName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
