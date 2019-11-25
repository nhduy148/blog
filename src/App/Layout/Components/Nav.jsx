import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    let { categoryList } = this.props;
    return (
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            {
              !!categoryList && categoryList.length > 0
                ? categoryList.map( (cat, i) => <li key={cat.slug}><Link to={`/category/${cat.slug}`}>{cat.name}</Link></li> )
                : ''
            }
          </ul>
          {/* <!-- .navbar-collapse --> */}
        </div>
        {/* <!-- .container --> */}
      </nav>
    )
  }
}
