import React, { Component } from 'react';
import Header from '../Layout/Header';
import Main from '../Layout/Main';

export default class Page404 extends Component {
  render() {
    return (
      <>
        <Header />
        <Main componentOutsideTop={<h3>404</h3>} />
      </>
    )
  }
}
