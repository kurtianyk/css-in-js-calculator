import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`
@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    background-color: whitesmoke;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  }
  button {
    cursor: pointer;
  }
`

registerServiceWorker();
