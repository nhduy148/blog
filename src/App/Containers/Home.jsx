import React, { Component } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import Feature from '../Components/Home/Feature';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Feature />      
        <section id="category_section" class="category_section">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="category_section mobile">
                  <div class="article_title header_purple">
                    <h2><Link to="category.html" target="_self">Mobile</Link></h2>
                  </div>
                  {/* <!----article_title------> */}
                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="top_article_img">
                          <Link to="single.html" target="_self"><img class="img-responsive" src="assets/img/cat-mobi-left-1.jpg" alt="feature-top" /></Link>
                        </div>
                        {/* <!----top_article_img------> */}
                      </div>
                      <div class="col-md-6">
                        <span class="tag purple">Mobile</span>

                        <div class="category_article_title">
                          <h2><Link to="single.html" target="_self">Airbnb launches photo-centric app for iPads and
                              Android
                              tablets. </Link></h2>
                        </div>
                        {/* <!----category_article_title------> */}
                        <div class="category_article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link>
                        </div>
                        {/* <!----category_article_date------> */}
                        <div class="category_article_content">
                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                          procrastinate
                          B2C users after installed base benefits. Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </div>
                        {/* <!----category_article_content------> */}
                        <div class="media_social">
                          <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                          <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                        </div>
                        {/* <!----media_social------> */}
                      </div>
                    </div>
                  </div>
                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="media">
                          <div class="media-left">
                            <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm1.jpg"
                                alt="Generic placeholder" /></Link>
                          </div>
                          <div class="media-body">
                            <span class="tag purple">Mobile</span>

                            <h3 class="media-heading"><Link to="single.html" target="_self">Apple launches photo-centric
                                wrist watch for Android</Link></h3>
                            <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                            <div class="media_social">
                              <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                              <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                            </div>
                          </div>
                        </div>
                        <div class="media">
                          <div class="media-left">
                            <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm3.jpg"
                                alt="Generic placeholder" /></Link>
                          </div>
                          <div class="media-body">
                            <span class="tag purple">Mobile</span>

                            <h3 class="media-heading"><Link to="single.html" target="_self">The Portable Charger or data
                                cable</Link></h3>
                            <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                            <div class="media_social">
                              <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                              <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="media">
                          <div class="media-left">
                            <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm2.jpg"
                                alt="Generic placeholder" /></Link>
                          </div>
                          <div class="media-body">
                            <span class="tag purple">Mobile</span>

                            <h3 class="media-heading"><Link to="single.html" target="_self">Iphone 6 launches white &
                                Grey
                                colors handset</Link></h3>
                            <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                            <div class="media_social">
                              <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                              <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                            </div>
                          </div>
                        </div>
                        <div class="media">
                          <div class="media-left">
                            <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm4.jpg"
                                alt="Generic placeholder" /></Link>
                          </div>
                          <div class="media-body">
                            <span class="tag purple">Mobile</span>

                            <h3 class="media-heading"><Link to="single.html" target="_self">Fully new look slim handset
                                like</Link></h3>
                            <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                            <div class="media_social">
                              <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                              <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="divider"><Link to="#">More News&nbsp;&raquo;</Link></p>
                </div>
                {/* <!-- Mobile News Section --> */}

                <div class="category_section tablet">
                  <div class="article_title header_pink">
                    <h2><Link to="category.html" target="_self">Tablet Pc</Link></h2>
                  </div>
                  {/* <!-- Mobile News Section --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self"><img class="img-responsive"
                                src="assets/img/tab_top1.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag pink"><Link to="category.html" target="_self">Tablet</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Sony launce a new Android tablets for new
                                generation </Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                          {/* <!----article_date------> */}
                          {/* <!-- article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                            procrastinate B2C users after.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self">
                              <img class="img-responsive" src="assets/img/tab_top2.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag pink"><Link to="category.html" target="_self">Tablet</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Technology market see the new Android tablets </Link>
                            </h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                          {/* <!----article_date------> */}
                          {/* <!-- article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                            procrastinate B2C users after.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                    </div>
                    {/* <!-- row --> */}

                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <p class="divider"><Link to="#">More News&nbsp;&raquo;</Link></p>
                </div>
                {/* <!-- Tablet News Section --> */}

                <div class="category_section gadget">
                  <div class="article_title header_black">
                    <h2><Link to="category.html" target="_self">Gadgets</Link></h2>
                  </div>
                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self">
                              <img class="img-responsive" src="assets/img/gad_top1.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag black"><Link to="category.html" target="_self">Gadgets</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">A good news for gadget users Ds tech comming
                                soon</Link>
                            </h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                          {/* <!----article_date------> */}
                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                            procrastinate B2C users after.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                        <div class="category_article_list">
                          <div class="media">
                            <div class="media-left">
                              <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm1.jpg"
                                  alt="Generic placeholder" /></Link>
                            </div>
                            <div class="media-body">
                              <h3 class="media-heading"><Link to="single.html" target="_self">Apple launches
                                  photo-centric
                                  wrist watch for Android</Link></h3>
                              <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                              <div class="media_social">
                                <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                                <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                              </div>
                            </div>
                          </div>
                          <div class="media">
                            <div class="media-left">
                              <Link to="#"><img class="media-object" src="assets/img/cat-mobi-sm3.jpg"
                                  alt="Generic placeholder" /></Link>
                            </div>
                            <div class="media-body">
                              <h3 class="media-heading"><Link to="single.html" target="_self">Apple launches
                                  photo-centric
                                  wrist watch for Android</Link></h3>
                              <span class="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

                              <div class="media_social">
                                <span><Link to="#"><i class="fa fa-eye"></i>424</Link> Views</span>
                                <span><Link to="#"><i class="fa fa-comments-o"></i>4</Link> Comments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- category_article_list --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <img class="img-responsive" src="assets/img/gad_top2.jpg" alt="feature-top" />
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag black">Gadgets</span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Apple launches photo-centric app for iPads and
                                Android
                                tablets</Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                          {/* <!-- article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base benefits. Dramatically visualize customer
                            directed
                            convergence without revolutionary ROI.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="article_social">
                            <span><i class="fa fa-eye"></i><Link to="#">424</Link>Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                          </div>
                          {/* <!-- article_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}
                      </div>
                    </div>
                    {/* <!-- row --> */}

                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <p class="divider"><Link to="#">More News&nbsp;&raquo;</Link></p>
                </div>
                {/* <!-- Gadget News Section --> */}

                <div class="category_section camera">
                  <div class="article_title header_orange">
                    <h2><Link to="category.html" target="_self">Camera</Link></h2>
                  </div>
                  {/* <!-- article_title --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="top_article_img">
                          <Link to="single.html" target="_self">
                            <img class="img-responsive" src="assets/img/cam_left1.jpg" alt="feature-top" />
                          </Link>
                        </div>
                        {/* <!-- top_article_img --> */}

                      </div>
                      <div class="col-md-7">
                        <span class="tag orange">Camera</span>

                        <div class="category_article_title">
                          <h2><Link to="single.html" target="_self">Yasaki camera launches new generic hi-speed </Link></h2>
                        </div>
                        {/* <!-- category_article_title --> */}

                        <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                        {/* <!----article_date------> */}
                        {/* <!-- category_article_wrapper --> */}

                        <div class="category_article_content">
                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                          procrastinate.
                        </div>
                        {/* <!-- category_article_content --> */}

                        <div class="media_social">
                          <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                          <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                        </div>
                        {/* <!-- media_social --> */}

                      </div>
                      {/* <!-- col-md-7 --> */}

                    </div>
                    {/* <!-- row --> */}

                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="top_article_img">
                          <Link to="single.html" target="_self">
                            <img class="img-responsive" src="assets/img/cam_left2.jpg" alt="feature-top" />
                          </Link>
                        </div>
                        {/* <!-- top_article_img --> */}

                      </div>
                      <div class="col-md-7">
                        <span class="tag orange">Camera</span>

                        <div class="category_article_title">
                          <h2><Link to="single.html" target="_self">DSLR is the most old camera at this time </Link></h2>
                        </div>
                        {/* <!-- category_article_title --> */}

                        <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                        {/* <!----article_date------> */}
                        {/* <!-- article_date --> */}

                        <div class="category_article_content">
                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                          procrastinate.
                        </div>
                        {/* <!-- category_article_content --> */}

                        <div class="media_social">
                          <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                          <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                        </div>
                        {/* <!-- media_social --> */}

                      </div>
                    </div>
                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="top_article_img">
                          <Link to="single.html" target="_self">
                            <img class="img-responsive" src="assets/img/cam_left3.jpg" alt="feature-top" />
                          </Link>
                        </div>
                        {/* <!-- media_social --> */}

                      </div>
                      <div class="col-md-7">
                        <span class="tag orange"><Link to="single.html" target="_self">Camera</Link></span>

                        <div class="category_article_title">
                          <h2><Link to="single.html" target="_self">Canon Camera launches photo centric Android</Link></h2>
                        </div>
                        {/* <!-- category_article_title --> */}

                        <div class="article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></div>
                        {/* <!----article_date------> */}
                        {/* <!-- article_date --> */}

                        <div class="category_article_content">
                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                          procrastinate.
                        </div>
                        {/* <!-- category_article_content --> */}

                        <div class="media_social">
                          <span>
                            <Link to="#">
                              <i class="fa fa-eye"></i>424
                            </Link> Views
                          </span>
                          <span>
                            <Link to="#">
                              <i class="fa fa-comments-o"></i>4
                            </Link> Comments
                          </span>
                        </div>
                        {/* <!-- media_social --> */}

                      </div>
                      {/* <!-- col-md-7 --> */}

                    </div>
                    {/* <!-- row --> */}

                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <p class="divider"><Link to="#">More News&nbsp;&raquo;</Link></p>
                </div>
                {/* <!-- Camera News Section --> */}

                <div class="category_section design">
                  <div class="article_title header_blue">
                    <h2><Link to="category.html" target="_self">Design</Link></h2>
                  </div>
                  {/* <!-- row --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self">
                              <img class="img-responsive" src="assets/img/design_top1.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag blue"><Link to="category.html" target="_self">Design</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Marketing Tranportation Fast and </Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="category_article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link>
                          </div>
                          {/* <!----category_article_date------> */}
                          {/* <!-- category_article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self">
                              <img class="img-responsive" src="assets/img/design_top2.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag blue"><Link to="category.html" target="_self">Design</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Theme Hippo launches Unship </Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="category_article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link>
                          </div>
                          {/* <!----category_article_date------> */}
                          {/* <!-- category_article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                    </div>
                    {/* <!-- row --> */}

                  </div>
                  {/* <!-- category_article_wrapper --> */}

                  <div class="category_article_wrapper">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <Link to="single.html" target="_self">
                              <img class="img-responsive" src="assets/img/design_top3.jpg" alt="feature-top" />
                            </Link>
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag blue"><Link to="category.html" target="_self">Design</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Huge Ultimate website builder </Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="category_article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link>
                          </div>
                          {/* <!----category_article_date------> */}
                          {/* <!-- category_article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- col-md-6 --> */}

                      <div class="col-md-6">
                        <div class="category_article_body">
                          <div class="top_article_img">
                            <img class="img-responsive" src="assets/img/design_top4.jpg" alt="feature-top" />
                          </div>
                          {/* <!-- top_article_img --> */}

                          <span class="tag blue"><Link to="category.html" target="_self">Design</Link></span>

                          <div class="category_article_title">
                            <h2><Link to="single.html" target="_self">Just another theme xdesign</Link></h2>
                          </div>
                          {/* <!-- category_article_title --> */}

                          <div class="category_article_date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link>
                          </div>
                          {/* <!-- category_article_date --> */}

                          <div class="category_article_content">
                            Collaboratively administrate empowered markets via plug-and-play networks.
                          </div>
                          {/* <!-- category_article_content --> */}

                          <div class="media_social">
                            <span><Link to="#"><i class="fa fa-eye"></i>424 </Link> Views</span>
                            <span><i class="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
                          </div>
                          {/* <!-- media_social --> */}

                        </div>
                        {/* <!-- category_article_body --> */}

                      </div>
                      {/* <!-- top_article_img --> */}

                    </div>
                    {/* <!-- top_article_img --> */}

                  </div>
                  {/* <!-- top_article_img --> */}

                  <p class="divider"><Link to="#">More News&nbsp;&raquo;</Link></p>
                </div>
                {/* <!-- Design News Section --> */}
              </div>
              {/* <!-- Left Section --> */}

              <Sidebar />

            </div>
            {/* <!-- Row --> */}

          </div>
          {/* <!-- Container --> */}

        </section>
        <Footer />
      </>
    )
  }
}
