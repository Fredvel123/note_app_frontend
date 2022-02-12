import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './App';
// styles
import './styles/main.css';
// redux
import { Provider } from 'react-redux'
import { store } from './redux/store';


ReactDOM.render(
  <Provider store={store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
