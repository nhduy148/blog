import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Header/Navigation';

// import logoWhite from '../Assets/image/common/logo_white.png';
import logoBlack from '../Assets/image/common/logo_black.png';

import { connect } from 'react-redux';
import { fetchCategoryList } from '../Actions'

import loadingImage from '../Assets/image/common/loading-page.gif'

class Header extends Component {

  componentDidMount() {
    this.props.fetchCategoryList();
    
    let header = document.getElementById('header');
    let headerHeight = header.clientHeight;
    let doc = document.documentElement;  
    let top = ( window.pageYOffset || doc.scrollTop )  - ( doc.clientTop || 0 );
    
    if( window.location.pathname === "/" ) {
      if( top > headerHeight ) header.classList.add("is-fixed");
      else header.classList.remove("is-fixed");

      if( header.classList.contains("is-fixed") ) header.classList.remove("is-fixed");
  
      window.addEventListener("scroll", () => {
        let top = ( window.pageYOffset || doc.scrollTop )  - ( doc.clientTop || 0 );
        if( top > headerHeight ) { 
          header.classList.add("is-fixed"); 
          header.classList.add("fake-headroom") }
        else {
          header.classList.remove("is-fixed");
          header.classList.remove("fake-headroom");
        }
      })
    }
    else {
      if( !header.classList.contains("is-fixed") ) header.classList.add("is-fixed");
    }
  }

  render() {
    let { categoryList, getCategoryListStatus } = this.props;

    let dayNow = new Date();
    let day = dayNow.toLocaleString('vi-VN', { weekday: 'long' });
    let date = dayNow.getDate();
    let month = dayNow.toLocaleString('vi-VN', { month: 'long' });
    let year = dayNow.getFullYear();

    return (
      <>
        <div className={`loading${getCategoryListStatus ? ' is-completed' : ''}`}>
          <img src={loadingImage} alt="" />
        </div>
        <header id="header" className="header">
          <div className="header-section">
            <div className="container">
              <div className="header-section-box">
                <div className="header-left">
                  {/* <!-- Date --> */}{/* <!-- Time --> */}
                  <p><span className="date">{day}</span><span className="time"> . {date} {month} . {year}</span></p>
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
                  <Link to="/"><img src={logoBlack} alt="Tech NewsLogo" /></Link>
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
            </div>
            {/* <!-- Header Section --> */}
          </div>
          {/* <!-- .container --> */}

          <div className="navbar-section">
            <div className="logo">
              <Link to="/"><img src={logoBlack} alt="Tech NewsLogo" /></Link>
            </div>
            <Navigation categoryList={categoryList} />
          </div>
          {/* <!-- .navigation-section --> */}
        </header>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categoryList,
  getCategoryListStatus: state.getCategoryListStatus
})

const mapDispatchToProps = dispatchEvent => {
  return {
    fetchCategoryList: () => {
      dispatchEvent(fetchCategoryList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
