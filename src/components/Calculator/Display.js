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
  color: #fff;
`

const DisplayValue = styled.div`
  background-color: #fff;
  height: 100px;
  word-wrap: break-word; 
  border-radius: 5px;
  background-image: linear-gradient(to right, #345668 0%, #493d4e 100%);
  color: #fff;
`

const Display = (props) => (
  <DisplayWrapper>
    <DisplayExpression>{props.expression}</DisplayExpression>
    <DisplayValue className = 'text-right pr-2 h3 d-md-none d-sm-block pt-5'>{props.value}</DisplayValue>
    <DisplayValue className = 'text-right pr-2 h1 d-none d-lg-none d-md-block pt-4'>{props.value}</DisplayValue>
    <DisplayValue className = 'text-right pr-2 display-4 d-none d-lg-block pt-4'>{props.value}</DisplayValue>
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