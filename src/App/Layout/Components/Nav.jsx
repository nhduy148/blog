import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar m-menu navbar-default">
        <div class="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse" id="#navbar-collapse-1">
            <ul class="nav navbar-nav main-nav">
              <li class="active"><Link to="index.html">News</Link></li>
              <li><Link to="category.html">Mobile</Link></li>
              <li><Link to="blog.html">Tablet</Link></li>
              <li><Link to="blog.html">Gadgets</Link></li>
              <li><Link to="blog.html">Camera</Link></li>
              <li><Link to="blog.html">Design</Link></li>
              <li class="dropdown m-menu-fw">
                <Link to="#" data-toggle="dropdown" class="dropdown-toggle">More <span><i class="fa fa-angle-down"></i></span></Link>
                <ul class="dropdown-menu">
                  <li>
                    <div class="m-menu-content">
                      <ul class="col-sm-3">
                        <li class="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul class="col-sm-3">
                        <li class="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul class="col-sm-3">
                        <li class="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul class="col-sm-3">
                        <li class="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- .navbar-collapse --> */}
        </div>
        {/* <!-- .container --> */}
      </nav>
    )
  }
}
