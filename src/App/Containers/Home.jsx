import React, { Component } from 'react'
import Header from '../Layout/Header'
// import Footer from '../Layout/Footer'

// import { Link } from 'react-router-dom';
import Trending from '../Components/Home/Trending';
import Main from '../Layout/Main';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Main componentInside={[<Trending />]} haveSidebar={true} />
        {/* <Footer /> */}
      </>
    )
  }
}
