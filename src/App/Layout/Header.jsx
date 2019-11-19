import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Components/Nav';

export default class Header extends Component {
  render() {
    return (
      <section id="header_section_wrapper" class="header_section_wrapper">
        <div class="container">
          <div class="header-section">
            <div class="row">
              <div class="col-md-4">
                <div class="left_section">
                  {/* <!-- Date --> */}{/* <!-- Time --> */}
                  <span class="date">Sunday . </span><span class="time">09 August . 2016</span>
                  <div class="social">
                    <Link class="icons-sm fb-ic"><i class="fa fa-facebook"></i></Link>
                    {/* <!--Twitter--> */}
                    <Link class="icons-sm tw-ic"><i class="fa fa-twitter"></i></Link>
                    {/* <!--Google +--> */}
                    <Link class="icons-sm inst-ic"><i class="fa fa-instagram"> </i></Link>
                    {/* <!--Linkedin--> */}
                    <Link class="icons-sm tmb-ic"><i class="fa fa-tumblr"> </i></Link>
                    {/* <!--Pinterest--> */}
                    <Link class="icons-sm rss-ic"><i class="fa fa-rss"> </i></Link>
                  </div>
                  {/* <!-- Top Social Section --> */}
                </div>
                {/* <!-- Left Header Section --> */}
              </div>
              <div class="col-md-4">
                <div class="logo">
                  <Link to="index.html"><img src="assets/img/logo.png" alt="Tech NewsLogo" /></Link>
                </div>
                {/* <!-- Logo Section --> */}
              </div>
              <div class="col-md-4">
                <div class="right_section">
                  <ul class="nav navbar-nav">
                    <li><Link to="#">Login</Link></li>
                    <li><Link to="#">Register</Link></li>
                    <li class="dropdown lang">
                      <button class="btn btn-default dropdown-toggle" type="button"
                        id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true">En <i class="fa fa-angle-down"></i></button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><Link to="#">Bn</Link></li>
                      </ul>
                    </li>
                  </ul>
                  {/* <!-- Language Section --> */}

                  <ul class="nav-cta hidden-xs">
                    <li class="dropdown">
                      <Link to="#" data-toggle="dropdown" class="dropdown-toggle">
                        <i class="fa fa-search"></i>
                      </Link>
                      <ul class="dropdown-menu">
                        <li>
                          <div class="head-search">
                            <form>
                              {/* <!-- Input Group --> */}
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="Type Something" />
                                <span class="input-group-btn">
                                  <button type="submit" class="btn btn-primary">Search</button>
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

          <div class="navigation-section">
            <Nav />
          </div>
          {/* <!-- .navigation-section --> */}
        </div>
        {/* <!-- .container --> */}
      </section>
    )
  }
}
