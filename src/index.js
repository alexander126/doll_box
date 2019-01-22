import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import 'semantic-ui/dist/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
