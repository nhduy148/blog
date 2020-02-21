import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {

  const dispatch = useDispatch();

  const reduxProps = useSelector( state =>  ({isLogged: state.isLogged}) )

  let { isLogged } = reduxProps;
  
  useEffect(() => {
    dispatch(actionAuthen());
  },
  [dispatch, isLogged])

  return (
    <Route render={({ location }) => {
      const { pathname } = location;
    
      return (
        <TransitionGroup component="div" className="app" id="App">
          <CSSTransition
            key={pathname}
            classNames="app-wrapper"
            timeout={100}
            unmountOnExit
            appear
          >
            <div>
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
            </div>
          </CSSTransition>
        </TransitionGroup>
      )
    }}/>
  );
}

export default withRouter(App);
