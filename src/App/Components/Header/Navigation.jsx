import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {

  render() {
    let { categoryList } = this.props;
    return (
      <nav className="navbar">
        {/* <div className="container"> */}
          <ul className="navbar-nav">
            <li><NavLink exact={true} activeClassName="active" to="/">Home</NavLink></li>
            {
              !!categoryList && categoryList.length > 0
                ? categoryList.map( (cat, i) => <li key={cat.slug}><NavLink to={`/category/${cat.slug}`}>{cat.name}</NavLink></li> )
                : ''
            }
          </ul>
        {/* </div> */}
      </nav>
    )
  }
}
