import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const KeypadWrapper = styled.div`
  height: 350px;
`

const KeypadRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`

const KeypadButton = styled.button`
  font-size: 1.6rem;
  margin: 2px;
  overflow: hidden;
  height: 60px;
  width: 80%;
  background-color: #444854;
  outline-style: none;
  border: none;
`

const KeypadButtonSecondary = styled(KeypadButton)`
  color: #c41c4f;
`

const KeypadButtonPrimary = styled(KeypadButton)`
  color: #00a3f5;
`

const Keypad = (props) => {

  const handleOnDigit = (e) => {
    props.onDigit(e.target.value);
  };

  return (
    <KeypadWrapper>
      <KeypadRow>
        <KeypadButtonSecondary value="clear-all" onClick={props.onClearAll}>CE</KeypadButtonSecondary>
        <KeypadButtonSecondary value="clear" onClick={props.onClear}>C</KeypadButtonSecondary>
        <KeypadButtonSecondary value="backspace" onClick={props.onDelete}><i className="fa fa-caret-left fa-lg"></i></KeypadButtonSecondary>
        <KeypadButtonSecondary value="/" onClick={props.onDivide}>&divide;</KeypadButtonSecondary>
      </KeypadRow>
      <KeypadRow>
        <KeypadButtonPrimary value="7" onClick={handleOnDigit}>7</KeypadButtonPrimary>
        <KeypadButtonPrimary value="8" onClick={handleOnDigit}>8</KeypadButtonPrimary>
        <KeypadButtonPrimary value="9" onClick={handleOnDigit}>9</KeypadButtonPrimary>
        <KeypadButtonSecondary value="*" onClick={props.onMultiply}>&times;</KeypadButtonSecondary>
      </KeypadRow>
      <KeypadRow>
        <KeypadButtonPrimary value="4" onClick={handleOnDigit}>4</KeypadButtonPrimary>
        <KeypadButtonPrimary value="5" onClick={handleOnDigit}>5</KeypadButtonPrimary>
        <KeypadButtonPrimary value="6" onClick={handleOnDigit}>6</KeypadButtonPrimary>
        <KeypadButtonSecondary value="-" onClick={props.onSubtract}>&minus;</KeypadButtonSecondary>
      </KeypadRow>
      <KeypadRow>
        <KeypadButtonPrimary value="1" onClick={handleOnDigit}>1</KeypadButtonPrimary>
        <KeypadButtonPrimary value="2" onClick={handleOnDigit}>2</KeypadButtonPrimary>
        <KeypadButtonPrimary value="3" onClick={handleOnDigit}>3</KeypadButtonPrimary>
        <KeypadButtonSecondary value="+" onClick={props.onAdd}>&#43;</KeypadButtonSecondary>
      </KeypadRow>
      <KeypadRow>
        <KeypadButtonSecondary value="+-" onClick={props.onToggleSign}>&plusmn;</KeypadButtonSecondary>
        <KeypadButtonPrimary value="0" onClick={handleOnDigit}>0</KeypadButtonPrimary>
        <KeypadButtonSecondary value="." onClick={props.onDecimalPoint}>.</KeypadButtonSecondary>
        <KeypadButtonSecondary value="=" onClick={props.onEquals}>=</KeypadButtonSecondary>
      </KeypadRow>
    </KeypadWrapper>
  );
};

Keypad.defaultProps = {
  onDigit: digit => alert(digit),
  onClear: () => alert('clear'),
  onClearAll: () => alert('clear-all'),
  onDelete: () => alert('delete'),
  onAdd: () => alert('add'),
  onEquals: () => alert('equals'),
  onDecimalPoint: () => alert('.'),
  onSubtract: () => alert('subtract'),
  onToggleSign: () => alert('+/-'),
  onDivide: () => alert('/'),
  onMultiply: () => alert('*')
};

Keypad.propTypes = {
  onDigit: PropTypes.func,
  onClear: PropTypes.func,
  onClearAll: PropTypes.func,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
  onEquals: PropTypes.func,
  onDecimalPoint: PropTypes.func,
  onSubtract: PropTypes.func,
  onDivide: PropTypes.func,
  onMultiply: PropTypes.func,
  onToggleSign: PropTypes.func
};

export default Keypad;