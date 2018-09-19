import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`
@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    height: 897px;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    background-image: linear-gradient(to bottom right, #5cc8ff 0%, #d63c6b 100%);
  }
  button {
    cursor: pointer;
  }
`

registerServiceWorker();
