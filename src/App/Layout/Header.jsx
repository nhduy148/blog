import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Navigation from '../Components/Header/Navigation';

import logoWhite from '../Assets/image/common/logo_white.png';
import logoBlack from '../Assets/image/common/logo_black.png';

import { connect } from 'react-redux';
import { fetchCategoryList, actionLogOut } from '../Actions';

import loadingImage from '../Assets/image/common/loading-page.gif'

class Header extends Component {

  state = {
    showUserAction: false,
    showSearchAction: false,
  }

  componentDidMount() {

    this.props.fetchCategoryList();

    const app = document.getElementById("App")
    let header = document.getElementById('header');
    let headerHeight = header.clientHeight;
    let top = app.scrollTop;
    
    if( top > headerHeight ) header.classList.add("is-fixed");
    else header.classList.remove("is-fixed");

    app.addEventListener("scroll", () => {
      let top = app.scrollTop

      if( top > headerHeight ) { 
        header.classList.add("is-fixed"); 
        header.classList.add("fake-headroom") }
      else {
        header.classList.remove("is-fixed");
        header.classList.remove("fake-headroom");
      }
    })

    
    let { showSearchAction, showUserAction } = this.state;
    
    if( showSearchAction || showUserAction ) {
      app.addEventListener( "scroll", () => {
        this.setState({
          showSearchAction: false,
          showUserAction: false,
        })
      })
    }
  }

  toggleUser = () => {
    this.setState({
      showUserAction: !this.state.showUserAction,
      showSearchAction: false
    });
  }

  toggleSearch = () => {
    this.setState({
      showSearchAction: !this.state.showSearchAction,
      showUserAction: false
    });
  }

  render() {
    let { showSearchAction, showUserAction } = this.state;
    let { categoryList, getCategoryListStatus, isLogged, currentUser } = this.props;
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
                  <p><span className="date">{day}</span><span className="time"> . {date} {month} . {year}</span></p>
                </div>
                <div className="header-right">
                  {
                    isLogged
                    ? <div className="header-user">
                        <p data-toggle="dropdown" className="dropdown-toggle" onClick={() => this.toggleUser()}><i className="fas fa-user"></i></p>
                        <CSSTransition
                          in={showUserAction}
                          timeout={100}
                          classNames="action"
                          unmountOnExit
                          appear
                        >
                          <ul className="action">
                            <li><span> Hi! {currentUser.name}</span></li>
                            <li><Link to="/admin/user/me">Change Infomation</Link></li>
                            <li><span onClick={() => this.props.actionLogOut()}>Logout</span></li>
                          </ul>
                        </CSSTransition>
                      </div>
                    : <ul className="header-auth">
                        <li><Link to="/auth">Login</Link></li>
                        <li><Link to="/auth/signup">Register</Link></li>
                      </ul>
                  }

                  <div className="header-search">
                    <p data-toggle="dropdown" className="dropdown-toggle" onClick={()=>this.toggleSearch()}><i className="fa fa-search"></i></p>
                    <CSSTransition
                      in={showSearchAction}
                      classNames="action"
                      timeout={100}
                      unmountOnExit
                      appear
                    >
                      <form className="action">
                        <input type="text" className="header-search-input" placeholder="Type Something" />
                        <button type="submit" className="header-search-button">Search</button>
                      </form>
                    </CSSTransition>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-section">
            <div className="logo white">
              <Link to="/"><img src={logoWhite} alt="SpaceD" /></Link>
            </div>
            <div className="logo black">
              <Link to="/"><img src={logoBlack} alt="SpaceD" /></Link>
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
  getCategoryListStatus: state.getCategoryListStatus,

  isLogged: state.isLogged,
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatchEvent => {
  return {
    fetchCategoryList: () => {
      dispatchEvent(fetchCategoryList());
    },
    actionLogOut: () => {
      dispatchEvent( actionLogOut() )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
