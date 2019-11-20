import React from 'react'
import { Link } from 'react-router-dom';

export default function Feature() {
  return (
    <section id="feature_news_section" className="feature_news_section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="feature_article_wrapper">
              <div className="feature_article_img">
                <img className="img-responsive top_static_article_img" src="assets/img/feature-top.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div className="feature_article_inner">
                <div className="tag_lg red"><Link to="category.html">Hot News</Link></div>
                <div className="feature_article_title">
                  <h1><Link to="single.html" target="_self">Chevrolet car-saving technology delivers </Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div className="feature_article_date"><Link to="#" target="_self">Stive Clark</Link>,<Link to="#"
                  target="_self">Aug
                  4, 2015</Link></div>
                {/* <!-- feature_article_date --> */}

                <div className="feature_article_content">
                  In a move to address mounting concerns about security on Android, Google and Samsung are
                  now issuing.
              </div>
                {/* <!-- feature_article_content --> */}

                <div className="article_social">
                  <span><i className="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i className="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                </div>
                {/* <!-- article_social --> */}

              </div>
              {/* <!-- feature_article_inner --> */}

            </div>
            {/* <!-- feature_article_wrapper --> */}

          </div>
          {/* <!-- col-md-7 --> */}

          <div className="col-md-5">
            <div className="feature_static_wrapper">
              <div className="feature_article_img">
                <img className="img-responsive" src="assets/img/feature-static1.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div className="feature_article_inner">
                <div className="tag_lg purple"><Link to="category.html">Top Viewed</Link></div>
                <div className="feature_article_title">
                  <h1><Link to="single.html" target="_self">Alcatel's $180 Idol 3 4.7 is a </Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div className="feature_article_date"><Link to="#" target="_self">Stive Clark</Link>,<Link to="#"
                  target="_self">Aug
                  4, 2015</Link></div>
                {/* <!-- feature_article_date --> */}

                <div className="feature_article_content">
                  In a move to address mounting concerns about security on Android...
              </div>
                {/* <!-- feature_article_content --> */}

                <div className="article_social">
                  <span><i className="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i className="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                </div>
                {/* <!-- article_social --> */}

              </div>
              {/* <!-- feature_article_inner --> */}

            </div>
            {/* <!-- feature_static_wrapper --> */}

          </div>
          {/* <!-- col-md-5 --> */}

          <div className="col-md-5">
            <div className="feature_static_last_wrapper">
              <div className="feature_article_img">
                <img className="img-responsive" src="assets/img/feature-static2.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div className="feature_article_inner">
                <div className="tag_lg blue"><Link to="category.html">Top Viewed</Link></div>

                <div className="feature_article_title">
                  <h1><Link to="single.html" target="_self">Gadget user good news</Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div className="feature_article_date">
                  <Link to="#" target="_self">Stive Clark</Link>,
                <Link to="#" target="_self">Aug 4, 2015</Link>
                </div>
                {/* <!-- feature_article_date --> */}

                <div className="feature_article_content">
                  In a move to address mounting concerns about security on Android...
              </div>
                {/* <!-- feature_article_content --> */}

                <div className="article_social">
                  <span><i className="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i className="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                </div>
                {/* <!-- article_social --> */}

              </div>
              {/* <!-- feature_article_inner --> */}

            </div>
            {/* <!-- feature_static_wrapper --> */}

          </div>
          {/* <!-- col-md-5 --> */}

        </div>
        {/* <!-- Row --> */}

      </div>
      {/* <!-- container --> */}

    </section>
  )
}
