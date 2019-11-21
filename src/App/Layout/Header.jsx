import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Components/Nav';

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="container">
          <div className="header-section">
            <div className="header-left">
              {/* <!-- Date --> */}{/* <!-- Time --> */}
              <span className="date">Sunday</span><span className="time"> . 09 August . 2016</span>
              <div className="social">
                <Link to="#" className="icons-sm fb-ic"><i className="fab fa-facebook"></i></Link>
                {/* <!--Twitter--> */}
                <Link to="#" className="icons-sm tw-ic"><i className="fab fa-twitter"></i></Link>
                {/* <!--Google +--> */}
                <Link to="#" className="icons-sm inst-ic"><i className="fab fa-instagram"> </i></Link>
                {/* <!--Linkedin--> */}
                <Link to="#" className="icons-sm tmb-ic"><i className="fab fa-tumblr"> </i></Link>
                {/* <!--Pinterest--> */}
                <Link to="#" className="icons-sm rss-ic"><i className="fa fa-rss"> </i></Link>
              </div>
              {/* <!-- Top Social Section --> */}
            </div>
            <div className="logo">
              <Link to="index.html"><img src="assets/img/logo.png" alt="Tech NewsLogo" /></Link>
            </div>
            <div className="header-right">
              <ul className="header-auth">
                <li><Link to="#">Login</Link></li>
                <li><Link to="#">Register</Link></li>
              </ul>
              {/* <!-- Language Section --> */}

              <div className="header-search">
                <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                  <i className="fa fa-search"></i>
                </Link>
                <form className="header-search-form">
                  <input type="text" className="header-search-input" placeholder="Type Something" />
                  <button type="submit" className="header-search-button">Search</button>
                </form>
              </div>
              {/* <!-- Search Section --> */}
            </div>
          </div>
          {/* <!-- Header Section --> */}
        </div>
        {/* <!-- .container --> */}

        <div className="navbar-section">
          <Nav />
        </div>
        {/* <!-- .navigation-section --> */}
      </header>
    )
  }
}
