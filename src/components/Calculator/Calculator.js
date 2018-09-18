import React, { Component } from 'react';
import styled from 'styled-components';

import Display from './Display';
import Keypad from './Keypad';
import CalculatorEngine from './CalculatorEngine';

const calculator = new CalculatorEngine();

const CalculatorRow = styled.div.attrs({
  className: 'row'
})``

const CalculatorWrapper = styled.div.attrs({
  className: 'col-md-5 mx-auto'
})`
  background-color: #EAEAEA;
  padding: 0 10;
`

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      value: ''
    };
  }

  handleOnAdd = () => {
    calculator.add();
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnClear = () => {
    calculator.clear();
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnClearAll = () => {
    calculator.clearAll();
    
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnDecimalPoint = () => {
    calculator.inputDecimal();
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnDelete = () => {
    calculator.delete();
    this.setState(() => ({
      value: calculator.getValue().toString()
    }));
  }

  handleOnDigit = (number) => {
    calculator.inputDigit(number);
    this.setState(() => ({
      value: calculator.getValue()
    }));
  }

  handleOnDivide = () => {
    calculator.divide();
    
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnEquals = () => {
    calculator.equals();
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getResult().toString(),
    }));
  }

  handleOnMultiply = () => {
    calculator.multiply();
    
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnSubtract = () => {
    calculator.subtract();
    
    this.setState(() => ({
      expression: calculator.getExpression(),
      value: calculator.getValue().toString()
    }));
  }

  handleOnToggleSign = () => {
    calculator.toggleSign();
    this.setState(() => ({
      value: calculator.getValue().toString()
    }));
  }

  render() {
    return (
      <CalculatorRow>
        <CalculatorWrapper>
          <Display value={this.state.value} expression={this.state.expression} />
          {
            <Keypad onDigit={this.handleOnDigit}
              onAdd={this.handleOnAdd}
              onSubtract={this.handleOnSubtract}
              onDivide={this.handleOnDivide}
              onMultiply={this.handleOnMultiply}
              onDecimalPoint={this.handleOnDecimalPoint}
              onEquals={this.handleOnEquals}
              onClear={this.handleOnClear}
              onClearAll={this.handleOnClearAll}
              onDelete={this.handleOnDelete}
              onToggleSign={this.handleOnToggleSign} />
          }
        </CalculatorWrapper>
      </CalculatorRow>
    );
  }
}