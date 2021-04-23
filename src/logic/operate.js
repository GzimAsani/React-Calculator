import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const a = Big(numberOne);
  const b = Big(numberTwo);

  if (operation === '+') {
    return a.plus(b).toString();
  }
  if (operation === '-') {
    return a.minus(b).toString();
  }
  if (operation === 'x') {
    return a.times(b).toString();
  }
  if (operation === '/') {
    return a.div(b).toString();
  }
  if (operation === '%') {
    return a.mod(b).toString();
  }
  throw Error(`Undefined operation '${operation}' `);
}
