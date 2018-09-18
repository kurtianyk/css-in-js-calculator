import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DisplayWrapper = styled.div.attrs({
  className: 'mt-md-2'
})`
  position: relative;
  margin-bottom: 20px;
`

const DisplayExpression= styled.div.attrs({
  className: 'pr-2 h4'
})`
  position: absolute;
  top: 0;
  right: 0;
`

const DisplayValue = styled.div.attrs({
  className: ({ screen }) => (
    screen === 'small' && 'text-right pr-2 h3 d-md-none d-sm-block pt-5' || 
    screen === 'medium' && 'text-right pr-2 h1 d-none d-lg-none d-md-block pt-4' ||
    'text-right pr-2 display-4 d-none d-lg-block pt-4'
  )
})`
  background-color: #fff;
  height: 100px;
  word-wrap: break-word; 
`

const Display = (props) => (
  <DisplayWrapper>
    <DisplayExpression>{props.expression}</DisplayExpression>
    <DisplayValue screen = 'small'>{props.value}</DisplayValue>
    <DisplayValue screen = 'medium'>{props.value}</DisplayValue>
    <DisplayValue screen = 'large'>{props.value}</DisplayValue>
  </DisplayWrapper>
);

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;