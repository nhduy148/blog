import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './App/Reducers';
import { Provider } from 'react-redux';

import App from './App/App'


const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(); //Work offline
// serviceWorker.unregister(); //Work online
