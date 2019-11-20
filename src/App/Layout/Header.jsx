import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Components/Nav';

export default class Header extends Component {
  render() {
    return (
      <section id="header_section_wrapper" className="header_section_wrapper">
        <div className="container">
          <div className="header-section">
            <div className="row">
              <div className="col-md-4">
                <div className="left_section">
                  {/* <!-- Date --> */}{/* <!-- Time --> */}
                  <span className="date">Sunday</span><span className="time"> . 09 August . 2016</span>
                  <div className="social">
                    <Link to="#" className="icons-sm fb-ic"><i className="fa fa-facebook"></i></Link>
                    {/* <!--Twitter--> */}
                    <Link to="#" className="icons-sm tw-ic"><i className="fa fa-twitter"></i></Link>
                    {/* <!--Google +--> */}
                    <Link to="#" className="icons-sm inst-ic"><i className="fa fa-instagram"> </i></Link>
                    {/* <!--Linkedin--> */}
                    <Link to="#" className="icons-sm tmb-ic"><i className="fa fa-tumblr"> </i></Link>
                    {/* <!--Pinterest--> */}
                    <Link to="#" className="icons-sm rss-ic"><i className="fa fa-rss"> </i></Link>
                  </div>
                  {/* <!-- Top Social Section --> */}
                </div>
                {/* <!-- Left Header Section --> */}
              </div>
              <div className="col-md-4">
                <div className="logo">
                  <Link to="index.html"><img src="assets/img/logo.png" alt="Tech NewsLogo" /></Link>
                </div>
                {/* <!-- Logo Section --> */}
              </div>
              <div className="col-md-4">
                <div className="right_section">
                  <ul className="nav navbar-nav">
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">Register</Link></li>
                    <li className="dropdown lang">
                      <button className="btn btn-default dropdown-toggle" type="button"
                        id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true">En <i className="fa fa-angle-down"></i></button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><Link to="#">Bn</Link></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <!-- Language Section --> */}

                  <ul className="nav-cta hidden-xs">
                    <li className="dropdown">
                      <Link to="#" data-toggle="dropdown" className="dropdown-toggle">
                        <i className="fa fa-search"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="head-search">
                            <form>
                              {/* <!-- Input Group --> */}
                              <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type Something" />
                                <span className="input-group-btn">
                                  <button type="submit" className="btn btn-primary">Search</button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* <!-- Search Section --> */}
                </div>
                {/* <!-- Right Header Section --> */}
              </div>
            </div>
          </div>
          {/* <!-- Header Section --> */}

          <div className="navigation-section">
            <Nav />
          </div>
          {/* <!-- .navigation-section --> */}
        </div>
        {/* <!-- .container --> */}
      </section>
    )
  }
}
