import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;
  switch (operation) {
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case 'X':
      result = x.times(y);
      break;
    case '÷':
      if (numberTwo !== '0') {
        result = x.div(y);
      } else {
        return null;
      }
      break;
    default:
      break;
  }
  return result.toString();
}
