import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';

import Home from './Containers/Home'
import Page404 from './Containers/Page404'

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={Page404} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
