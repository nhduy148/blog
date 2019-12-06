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
            <Route exact path='/category/:category' component={Category} />
            {/* <Route exact path='/tag/:tag' component={Home} /> */}
            <Route exact path='/post/:slug' component={Single} />
            <Route exact path='*' component={Page404} />
          </Switch>
        </ScrollToTop>
      </Provider>
    );
  }
}

export default App;
