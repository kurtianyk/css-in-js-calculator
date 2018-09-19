import math from 'mathjs';

let currentValue = '';
let register = [];
let result = '';

class CalculatorEngine {
  constructor() {
    register = [];
    currentValue = '';
    result = '';
  }

  inputDigit(digit) {
    if (isNaN(digit)) {
      throw Error('Only numeric input is allowed');
    }
    if (result !== '') {
      result = '';
      currentValue = '';            
    }
    currentValue += digit;
  }

  inputDecimal() {
    if (result !== '') {
      result = '';
      currentValue = '';         
    }
    if (currentValue.indexOf('.') >= 0) {
      return;
    }
    if (currentValue === '') {
      currentValue += '0.';
    } else {
      currentValue += '.';
    }
  }

  clear() {
    currentValue = '';
    register = [];
    result = '';
  }

  clearAll() {
    currentValue = '';
    register = [];
    result = '';
  }

  delete() {
    if (currentValue === '') {
      return;
    }
    currentValue = currentValue.substring(0, currentValue.length - 1);
  }

  add() {
    if (currentValue === '') {
      return;
    }
    register.push(currentValue);
    register.push('+');
    currentValue = '';
  }

  subtract() {
    if (currentValue === '') {
      return;
    }
    register.push(currentValue);
    register.push('-');
    currentValue = '';
  }

  multiply() {
    if (currentValue === '') {
      return;
    }
    register.push(currentValue);
    register.push('*');
    currentValue = '';
  }

  divide() {
    if (currentValue === '') {
      return;
    }
    register.push(currentValue);
    register.push('/');
    currentValue = '';
  }

  equals() {
    if (currentValue === '') {
      return;
    }
    register.push(currentValue);
    const expression = register.join(' ');
    result = math.eval(expression);
    currentValue = result.toString();
    register = [];
  }

  toggleSign() {
    if (currentValue === '') {
      return;
    }
    currentValue = (parseFloat(currentValue) * (-1)).toString();
  }

  getValue() {
    return currentValue;
  }

  getExpression() {
    return register.join(' ');
  }

  getResult() {
    return result;
  }
}

export default CalculatorEngine;