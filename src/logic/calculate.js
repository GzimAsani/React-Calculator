import operate from './operate';

function calculate(dataObj, btnName) {
  let { total, next, operation } = dataObj;
<<<<<<< HEAD
  const isNum = (item) => !!item.match(/[0-9]+/);

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
    return {
      total,
      next,
      operation,
    };
  }

  if (isNum(btnName)) {
    if (btnName === '0' && dataObj.next === '0') {
      return {};
    }

    if (dataObj.operation) {
      if (dataObj.next) {
        return { next: dataObj.next + btnName };
      }
      return { next: btnName };
    }

    if (dataObj.next) {
      return {
        next: dataObj.next + btnName,
        total: null,
      };
    }

    return {
      next: btnName,
      total: null,
    };
  }

  if (btnName === '.') {
    if (dataObj.next) {
      if (dataObj.next.includes('.')) {
        return {};
      }
      return { next: `${dataObj.next}.` };
    }

    if (dataObj.operation) {
      return { next: '0.' };
    }

    if (dataObj.total) {
      if (dataObj.total.includes('.')) {
        return {};
      }
      return { total: `${dataObj.total}.` };
    }
    return { total: '0.' };
  }

  if (btnName === '=') {
    if (dataObj.next && dataObj.operation) {
      return {
        total: operate(dataObj.total, dataObj.next, dataObj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (btnName === '+/-') {
    if (dataObj.next) {
      return { next: (-1 * parseFloat(dataObj.next)).toString() };
    }
    if (dataObj.total) {
      return { next: (-1 * parseFloat(dataObj.total)).toString() };
    }
    return {};
  }

  if (dataObj.operation) {
    return {
      total: operate(dataObj.total, dataObj.next, dataObj.operation),
      next: null,
      operation: btnName,
    };
  }

  if (!dataObj.next) {
    return { operation: btnName };
  }

  return {
    total: dataObj.next,
    next: null,
    operation: btnName,
  };
}

export default calculate;

