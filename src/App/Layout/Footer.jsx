import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from './Components/Subscribe';

export default class Footer extends Component {
  render() {
    return (
      <>
        <Subscribe />
        <section id="footer_section" class="footer_section">
          <div class="container">
            <hr class="footer-top" />
            <div class="row">
              <div class="col-md-3">
                <div class="footer_widget_title">
                  <h3><Link to="category.html" target="_self">About Tech</Link></h3>
                </div>
                <div class="logo footer-logo">
                  <Link title="fontanero" href="index.html">
                    <img src="assets/img/tech_about.jpg" alt="technews" />
                  </Link>
                  <p>
                    Competently conceptualize go forward testing procedures and B2B expertise.
                    Phosfluorescently
                    cultivate principle-centered methods.of empowerment through fully researched.
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer_widget_title">
                  <h3><Link to="category.html" target="_self">Discover</Link></h3>
                </div>
                <div class="row">
                  <div class="col-xs-4">
                    <ul class="list-unstyled left">
                      <li><Link to="#">Mobile</Link></li>
                      <li><Link to="#">Tablet</Link></li>
                      <li><Link to="#">Gadgets</Link></li>
                      <li><Link to="#">Design</Link></li>
                      <li><Link to="#">Camera</Link></li>
                      <li><Link to="#">Apps</Link></li>
                      <li><Link to="#">Login</Link></li>
                      <li><Link to="#">About Us</Link></li>
                      <li><Link to="#">Membership</Link></li>
                      <li><Link to="#">Blog</Link></li>
                      <li><Link to="#">Job</Link></li>
                      <li><Link to="#">SiteMap</Link></li>
                    </ul>
                  </div>
                  <div class="col-xs-8">
                    <ul class="list-unstyled">
                      <li><Link to="#">Contact Us</Link></li>
                      <li><Link to="#">Newsletter Alerts</Link></li>
                      <li><Link to="#">Podcast</Link></li>
                      <li><Link to="#">Sms Subscription</Link></li>
                      <li><Link to="#">Advertisement Policy</Link></li>
                      <li><Link to="#">Report Technical issue</Link></li>
                      <li><Link to="#">Complaints and Corrections</Link></li>
                      <li><Link to="#">Terms and Conditions</Link></li>
                      <li><Link to="#">Privacy Policy</Link></li>
                      <li><Link to="#">Cookie Policy</Link></li>
                      <li><Link to="#">Securedrop</Link></li>
                      <li><Link to="#">Archives</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer_widget_title">
                  <h3><Link to="#" target="_self">Editor Picks</Link></h3>
                </div>
                <div class="media">
                  <div class="media-left">
                    <Link to="#">
                      <img class="media-object" src="assets/img/editor_pic1.jpg" alt="Generic placeholder" />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h3 class="media-heading">
                      <Link to="single.html">Apple launches photo-centric wrist watch for
                    Android</Link>
                    </h3>
                    <span class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-full"></i>
                    </span>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <Link to="#">
                      <img class="media-object" src="assets/img/editor_pic2.jpg" alt="Generic placeholder" />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h3 class="media-heading">
                      <Link to="single.html">Apple launches photo-centric wrist watch for Android</Link>
                    </h3>
                    <span class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-full"></i>
                    </span>
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <Link to="#">
                      <img class="media-object" src="assets/img/editor_pic3.jpg" alt="Generic placeholder" />
                    </Link>
                  </div>
                  <div class="media-body">
                    <h3 class="media-heading">
                      <Link to="single.html">Apple launches photo-centric wrist watch for
                    Android</Link>
                    </h3>
                    <span class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-full"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="footer_widget_title">
                  <h3><Link to="category.html" target="_self">Tech Photos</Link></h3>
                </div>
                <div class="widget_photos">
                  <img class="img-thumbnail" src="assets/img/tech_photo1.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo2.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo3.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo4.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo5.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo6.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo7.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo8.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo9.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo10.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo11.jpg" alt="Tech Photos" />
                  <img class="img-thumbnail" src="assets/img/tech_photo12.jpg" alt="Tech Photos" />
                </div>

              </div>
            </div>
          </div>

          <div class="footer_bottom_Section">
            <div class="container">
              <div class="row">
                <div class="footer">
                  <div class="col-sm-3">
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
                  </div>
                  <div class="col-sm-6">
                    <p>&copy; Copyright 2016-Tech News . Design by: <Link to="https://uicookies.com">uiCookies</Link> </p>
                  </div>
                  <div class="col-sm-3">
                    <p>Technology News Magazine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
