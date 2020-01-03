import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/image/common/logo_white.png';
// import mainvisual from '../../Assets/image/banner/mainvisual.jpg';
import mainvisual2 from '../../Assets/image/common/main-visual.png';

export default function MainVisual() {
  return (
    <section className="mainvisual flex-middle flex-column" style={{ backgroundImage: `url(${mainvisual2})` }}>
      <div className="mainvisual-content">
        <h1 className="logo"><Link to="/"><img src={Logo} alt="" /></Link></h1>
        <h3 className="mainvisual-title">The Ultimate Guide for Switched-on News and Views</h3>
      </div>

      {/* <Link to="#main" className="scroll">
        <svg class="nectar-scroll-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
          <path class="nectar-scroll-icon-path" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
        </svg>
      </Link> */}
    </section>
  )
}
