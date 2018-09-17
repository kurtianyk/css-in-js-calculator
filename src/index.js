import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`
@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`

registerServiceWorker();
