import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar m-menu navbar-default">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="#navbar-collapse-1">
            <ul className="nav navbar-nav main-nav">
              <li className="active"><Link to="index.html">News</Link></li>
              <li><Link to="category.html">Mobile</Link></li>
              <li><Link to="blog.html">Tablet</Link></li>
              <li><Link to="blog.html">Gadgets</Link></li>
              <li><Link to="blog.html">Camera</Link></li>
              <li><Link to="blog.html">Design</Link></li>
              <li className="dropdown m-menu-fw">
                <Link to="#" data-toggle="dropdown" className="dropdown-toggle">More <span><i className="fa fa-angle-down"></i></span></Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="m-menu-content">
                      <ul className="col-sm-3">
                        <li className="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul className="col-sm-3">
                        <li className="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul className="col-sm-3">
                        <li className="dropdown-header">Widget Haeder</li>
                        <li><Link to="#">Awesome Features</Link></li>
                        <li><Link to="#">Clean Interface</Link></li>
                        <li><Link to="#">Available Possibilities</Link></li>
                        <li><Link to="#">Responsive Design</Link></li>
                        <li><Link to="#">Pixel Perfect Graphics</Link></li>
                      </ul>
                      <ul className="col-sm-3">
                        <li className="dropdown-header">Widget Haeder</li>
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
