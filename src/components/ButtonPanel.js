import Button from './Button';

function ButtonPanel() {
  return (
    <div className="">
      <div className="groupA">
        <Button btnName="AC" />
        <Button btnName="+/-" />
        <Button btnName="%" />
        <Button btnName="÷" />
      </div>
      <div className="groupB">
        <Button btnName="7" />
        <Button btnName="8" />
        <Button btnName="9" />
        <Button btnName="X" />
      </div>
      <div className="groupC">
        <Button btnName="4" />
        <Button btnName="5" />
        <Button btnName="6" />
        <Button btnName="-" />
      </div>
      <div className="groupD">
        <Button btnName="1" />
        <Button btnName="2" />
        <Button btnName="3" />
        <Button btnName="+" />
      </div>
      <div className="groupE">
        <Button btnName="0" />
        <Button btnName="." />
        <Button btnName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
