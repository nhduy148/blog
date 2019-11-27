import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Components/Nav';

import logoWhite from '../Assets/image/common/logo_white.png';
import logoBlack from '../Assets/image/common/logo_black.png';

import { connect } from 'react-redux';
import { fetchCategoryList } from '../Actions'

import loadingImage from '../Assets/image/common/loading-page.gif'

export class Header extends Component {

  state = {
    fixHeader: false
  }

  componentDidMount() {
    this.props.fetchCategoryList();
    let header = document.getElementById('header');
    let main = document.getElementById('main');
    let headerHeight = header.clientHeight;

    window.addEventListener("scroll", () => {
      let doc = document.documentElement;
      let top = ( window.pageYOffset || doc.scrollTop )  - ( doc.clientTop || 0 );
      if( top > headerHeight ) {
        this.setState({ fixHeader: true });
        main.style.marginTop = headerHeight+'px';
      }
      else {
        this.setState({ fixHeader: false });
        main.style.marginTop = '0px';
      }
    })
  }

  render() {
    let { fixHeader } = this.state;

    let { categoryList, getCategoryListStatus } = this.props;

    let dayNow = new Date();
    let day = dayNow.toLocaleString('en-US', { weekday: 'long' });
    let date = dayNow.getDate();
    let month = dayNow.toLocaleString('en-US', { month: 'long' });
    let year = dayNow.getFullYear();

    return (
      <>
        <div className={`loading${getCategoryListStatus ? ' is-completed' : ''}`}>
          <img src={loadingImage} alt="" />
        </div>
        <header id="header" className={`header${fixHeader ? ' is-fixed' : ''}`}>
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
            <Nav categoryList={categoryList} />
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
