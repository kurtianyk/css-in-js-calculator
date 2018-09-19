import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Calculator from './Calculator/Calculator';

const AppWrapper = styled.div`
  overflow: hidden;
`

const AppSpacing = styled.div.attrs({
  className: 'mt-md-5'
})``

const App = () => (
  <AppWrapper>
    <Header title='Calculator' />
    <AppSpacing>
      <Calculator />
    </AppSpacing>
  </AppWrapper>
);

export default App;