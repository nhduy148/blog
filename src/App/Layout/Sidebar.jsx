import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
      <div className="widget">
        <div className="widget_title widget_black">
          <h2><Link to="#">Popular News</Link></h2>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right1.jpg" alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Canon launches photo centric 00214 Model supper shutter
                camera</Link>
            </h3> <span className="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

            <div className="widget_article_social">
              <span>
                <Link to="single.html" target="_self"> <i className="fa fa-eye"></i>424</Link> Views
              </span>
              <span>
                <Link to="single.html" target="_self"><i className="fa fa-comments-o"></i>4</Link> Comments
              </span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right2.jpg" alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Samsung galaxy note are the supper mobile of all
                products.</Link>
            </h3>
            <span className="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

            <div className="widget_article_social">
              <span>
                <Link to="single.html" target="_self"> <i className="fa fa-eye"></i>424</Link> Views
              </span>
              <span>
                <Link to="single.html" target="_self"><i className="fa fa-comments-o"></i>4</Link> Comments
              </span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right3.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Apple launches photo-centric wrist watch for Android</Link>
            </h3>
            <span className="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

            <div className="widget_article_social">
              <span>
                <Link to="single.html" target="_self"> <i className="fa fa-eye"></i>424</Link> Views
              </span>
              <span>
                <Link to="single.html" target="_self"><i className="fa fa-comments-o"></i>4</Link> Comments
              </span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right4.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Kodak Hi-Speed shutter double shot camera comming soon</Link>
            </h3>
            <span className="media-date"><Link to="#">10Aug- 2015</Link>, by: <Link to="#">Eric joan</Link></span>

            <div className="widget_article_social">
              <span>
                <Link to="single.html" target="_self"><i className="fa fa-eye"></i>424</Link> Views
              </span>
              <span>
                <Link to="single.html" target="_self"><i className="fa fa-comments-o"></i>4</Link> Comments
              </span>
            </div>
          </div>
        </div>
        <p className="widget_divider"><Link to="#" target="_self">More News&nbsp;&raquo;</Link></p>
      </div>
      {/* <!-- Popular News --> */}

      <div className="widget hidden-xs m30">
        <img className="img-responsive adv_img" src="assets/img/right_add1.jpg" alt="add_one" />
        <img className="img-responsive adv_img" src="assets/img/right_add2.jpg" alt="add_one" />
        <img className="img-responsive adv_img" src="assets/img/right_add3.jpg" alt="add_one" />
        <img className="img-responsive adv_img" src="assets/img/right_add4.jpg" alt="add_one" />
      </div>
      {/* <!-- Advertisement --> */}

      <div className="widget hidden-xs m30">
        <img className="img-responsive widget_img" src="assets/img/right_add5.jpg" alt="add_one" />
      </div>
      {/* <!-- Advertisement --> */}

      <div className="widget reviews m30">
        <div className="widget_title widget_black">
          <h2><Link to="#">Reviews</Link></h2>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right1.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">DSLR is the most old camera at this time readmore about new
                products</Link>
            </h3>
            <span className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-full"></i>
            </span>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right2.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading"><Link to="single.html" target="_self">Samsung is the best
                mobile in the android market.</Link></h3> <span className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-full"></i>
            </span>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right3.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Apple launches photo-centric wrist watch for Android</Link>
            </h3>
            <span className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-full"></i>
            </span>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right4.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Yasaki camera launches new generic hi-speed shutter camera.</Link>
            </h3>
            <span className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-full"></i>
            </span>
          </div>
        </div>
        <p className="widget_divider"><Link to="#" target="_self">More News&nbsp;&raquo;</Link></p>
      </div>
      {/* <!-- Reviews News --> */}

      <div className="widget hidden-xs m30">
        <img className="img-responsive widget_img" src="assets/img/right_add6.jpg" alt="add_one" />
      </div>
      {/* <!-- Advertisement --> */}

      <div className="widget m30">
        <div className="widget_title widget_black">
          <h2><Link to="#">Most Commented</Link></h2>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right1.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Yasaki camera launches new generic hi-speed shutter
                camera.</Link>
            </h3>

            <div className="media_social">
              <span><i className="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right2.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Samsung is the best mobile in the android market.</Link>
            </h3>

            <div className="media_social">
              <span><i className="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right3.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">Apple launches photo-centric wrist watch for Android</Link>
            </h3>

            <div className="media_social">
              <span><i className="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
            </div>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <Link to="#"><img className="media-object" src="assets/img/pop_right4.jpg"
                alt="Generic placeholder" /></Link>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <Link to="single.html" target="_self">DSLR is the most old camera at this time readmore about new
                products</Link>
            </h3>

            <div className="media_social">
              <span><i className="fa fa-comments-o"></i><Link to="#">4</Link> Comments</span>
            </div>
          </div>
        </div>
        <p className="widget_divider"><Link to="#" target="_self">More News&nbsp;&nbsp;&raquo; </Link></p>
      </div>
      {/* <!-- Most Commented News --> */}

      <div className="widget m30">
        <div className="widget_title widget_black">
          <h2><Link to="#">Editor Corner</Link></h2>
        </div>
        <div className="widget_body"><img className="img-responsive left" src="assets/img/editor.jpg" alt="Generic placeholder" />

          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
            procrastinate B2C
            users after installed base benefits. Dramatically visualize customer directed convergence without
          </p>

          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
            procrastinate B2C
            users after installed base benefits. Dramatically visualize customer directed convergence without
            revolutionary ROI.</p>
          <button className="btn pink">Read more</button>
        </div>
      </div>
      {/* <!-- Editor News --> */}

      <div className="widget hidden-xs m30">
        <img className="img-responsive add_img" src="assets/img/right_add7.jpg" alt="add_one" />
        <img className="img-responsive add_img" src="assets/img/right_add7.jpg" alt="add_one" />
        <img className="img-responsive add_img" src="assets/img/right_add7.jpg" alt="add_one" />
        <img className="img-responsive add_img" src="assets/img/right_add7.jpg" alt="add_one" />
      </div>
      {/* <!--Advertisement --> */}

      <div className="widget m30">
        <div className="widget_title widget_black">
          <h2><Link to="#">Readers Corner</Link></h2>
        </div>
        <div className="widget_body"><img className="img-responsive left" src="assets/img/reader.jpg"
            alt="Generic placeholder" />

          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
            procrastinate B2C
            users after installed base benefits. Dramatically visualize customer directed convergence without
          </p>

          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
            procrastinate B2C
            users after installed base benefits. Dramatically visualize customer directed convergence without
            revolutionary ROI.</p>
          <button className="btn pink">Read more</button>
        </div>
      </div>
      {/* <!--  Readers Corner News --> */}

      <div className="widget hidden-xs m30">
        <img className="img-responsive widget_img" src="assets/img/podcast.jpg" alt="add_one" />
      </div>
      {/* <!--Advertisement--> */}
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
