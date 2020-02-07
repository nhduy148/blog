import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

import Home from './Containers/Home'
import Page404 from './Containers/Page404'
import Single from './Containers/Single';
import ScrollToTop from './Components/General/ScrollToTop';
import Category from './Containers/Category';
import Tags from './Containers/Tags';
import Authentication from './Containers/Authentication';

import { actionAuthen } from './Actions';

function App() {

  const dispatch = useDispatch();

  const props = useSelector( state => ({
    isLogged: state.isLogged
  }))

  let { isLogged } = props;
  
  useEffect(() => {
    dispatch(actionAuthen());
  },
  [dispatch, isLogged])

  return (
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/auth' component={Authentication} />
          <Route exact path='/auth/:mode' component={Authentication} />
          <Route path='/category/:category' component={Category} />
          <Route path='/tag/:tag' component={Tags} />
          <Route path='/post/:slug' component={Single} />
          <Route exact path='*' component={Page404} />
        </Switch>
      </ScrollToTop>
  );
}

export default App;
