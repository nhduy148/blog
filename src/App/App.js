import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';

import Home from './Containers/Home'
import Page404 from './Containers/Page404'
import Single from './Containers/Single';
import ScrollToTop from './Components/General/ScrollToTop';
import Category from './Containers/Category';
import Tags from './Containers/Tags';

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/category/:category' component={Category} />
            <Route path='/tag/:tag' component={Tags} />
            <Route path='/post/:slug' component={Single} />
            <Route exact path='*' component={Page404} />
          </Switch>
        </ScrollToTop>
      </Provider>
    );
  }
}

export default App;
