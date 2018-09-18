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

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.3em;
`

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

// const AppWrapper = styled.span.attrs({
//   role: 'img'
// })``

const App = () => (
      <AppWrapper>
        <Header title='Calculator' />
        <AppSpacing>
          <Calculator />
        </AppSpacing>
      </AppWrapper>
);

export default App;
