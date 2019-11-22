import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="category.html">Mobile</Link></li>
            <li><Link to="blog.html">Tablet</Link></li>
            <li><Link to="blog.html">Gadgets</Link></li>
            <li><Link to="blog.html">Camera</Link></li>
            <li><Link to="blog.html">Design</Link></li>
          </ul>
          {/* <!-- .navbar-collapse --> */}
        </div>
        {/* <!-- .container --> */}
      </nav>
    )
  }
}
