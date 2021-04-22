import operate from './operate';

function calculate(dataObj, btnName) {
  let { total, next, operation } = dataObj;
  switch (btnName) {
    case '+/-':
      next *= -1;
      break;
    case '.':
      if (!next.includes('.')) {
        next += '.';
      }
      break;
    case '=':
      total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    case '+':
    case '-':
    case 'X':
    case '÷':
    case '%':
      total = operate(total, next, operation);
      next = null;
      operation = btnName;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    default:
      break;
  }
  return { total, next, operation };
}

export default calculate;
