import React from 'react'
import { Link } from 'react-router-dom';

export default function Feature() {
  return (
    <section id="feature_news_section" class="feature_news_section">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="feature_article_wrapper">
              <div class="feature_article_img">
                <img class="img-responsive top_static_article_img" src="assets/img/feature-top.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div class="feature_article_inner">
                <div class="tag_lg red"><Link to="category.html">Hot News</Link></div>
                <div class="feature_article_title">
                  <h1><Link to="single.html" target="_self">Chevrolet car-saving technology delivers </Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div class="feature_article_date"><Link to="#" target="_self">Stive Clark</Link>,<Link to="#"
                  target="_self">Aug
                  4, 2015</Link></div>
                {/* <!-- feature_article_date --> */}

                <div class="feature_article_content">
                  In a move to address mounting concerns about security on Android, Google and Samsung are
                  now issuing.
              </div>
                {/* <!-- feature_article_content --> */}

                <div class="article_social">
                  <span><i class="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i class="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                </div>
                {/* <!-- article_social --> */}

              </div>
              {/* <!-- feature_article_inner --> */}

            </div>
            {/* <!-- feature_article_wrapper --> */}

          </div>
          {/* <!-- col-md-7 --> */}

          <div class="col-md-5">
            <div class="feature_static_wrapper">
              <div class="feature_article_img">
                <img class="img-responsive" src="assets/img/feature-static1.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div class="feature_article_inner">
                <div class="tag_lg purple"><Link to="category.html">Top Viewed</Link></div>
                <div class="feature_article_title">
                  <h1><Link to="single.html" target="_self">Alcatel's $180 Idol 3 4.7 is a </Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div class="feature_article_date"><Link to="#" target="_self">Stive Clark</Link>,<Link to="#"
                  target="_self">Aug
                  4, 2015</Link></div>
                {/* <!-- feature_article_date --> */}

                <div class="feature_article_content">
                  In a move to address mounting concerns about security on Android...
              </div>
                {/* <!-- feature_article_content --> */}

                <div class="article_social">
                  <span><i class="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i class="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
                </div>
                {/* <!-- article_social --> */}

              </div>
              {/* <!-- feature_article_inner --> */}

            </div>
            {/* <!-- feature_static_wrapper --> */}

          </div>
          {/* <!-- col-md-5 --> */}

          <div class="col-md-5">
            <div class="feature_static_last_wrapper">
              <div class="feature_article_img">
                <img class="img-responsive" src="assets/img/feature-static2.jpg" alt="feature-top" />
              </div>
              {/* <!-- feature_article_img --> */}

              <div class="feature_article_inner">
                <div class="tag_lg blue"><Link to="category.html">Top Viewed</Link></div>

                <div class="feature_article_title">
                  <h1><Link to="single.html" target="_self">Gadget user good news</Link></h1>
                </div>
                {/* <!-- feature_article_title --> */}

                <div class="feature_article_date">
                  <Link to="#" target="_self">Stive Clark</Link>,
                <Link to="#" target="_self">Aug 4, 2015</Link>
                </div>
                {/* <!-- feature_article_date --> */}

                <div class="feature_article_content">
                  In a move to address mounting concerns about security on Android...
              </div>
                {/* <!-- feature_article_content --> */}

                <div class="article_social">
                  <span><i class="fa fa-share-alt"></i><Link to="#">424</Link>Shares</span>
                  <span><i class="fa fa-comments-o"></i><Link to="#">4</Link>Comments</span>
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
