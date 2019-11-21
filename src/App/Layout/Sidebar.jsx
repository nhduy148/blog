import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {

  state = {
    latest: [],
    comments: [],
    tags: [],
  }

  componentDidMount() {
    fetch("http://localhost:5003/posts?orderBy=date&order=DESC&limit=3")
      .then(res => res.json())
      .then( latest => this.setState({ latest }) )

    fetch("http://localhost:5003/posts?orderBy=comment_count&order=DESC&limit=3")
      .then(res => res.json())
      .then( comments => this.setState({ comments }) )

    fetch("http://localhost:5003/tags")
      .then(res => res.json())
      .then( tags => this.setState({ tags }) )
  }


  render() {

    let { latest, comments, tags } = this.state;

    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-widget">
          <h3 className="c-title">Latest posts</h3>
          <div className="sidebar-post-list">
            {
              latest.length > 0
                ? latest.map(post =>
                  <div className="sidebar-post-item" key={post.post_id}>
                    <div className="left">
                      <div className="image" style={{ backgroundImage: `url(${post.feature_image})` }}>
                        <Link to="#" className="post-link post-link--v2">
                          <span className="post-link-icon"><i className="fal fa-link"></i></span>
                        </Link>
                      </div>
                      <span className="view">{post.view}</span>
                    </div>
                    <div className="right">
                      <h3 className="title"><Link to="/">{post.title}</Link></h3>
                      <div className="bottom">
                        <p className="date">{new Date(post.date).toLocaleDateString('vi-VN')}</p>
                        <div className="post-comment-count">
                          <span className="icon"><i className="fal fa-comments"></i></span>
                          <span>{post.comment_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : <h3>Updating</h3>
            }
          </div>
        </div>
        <div className="sidebar-widget">
          <div className="sidebar-social-list">
            <div className="sidebar-social-item"><img src="assets/img/right_add1.jpg" alt=""/></div>
            <div className="sidebar-social-item"><img src="assets/img/right_add2.jpg" alt=""/></div>
            <div className="sidebar-social-item"><img src="assets/img/right_add3.jpg" alt=""/></div>
            <div className="sidebar-social-item"><img src="assets/img/right_add4.jpg" alt=""/></div>
          </div>
        </div>
        <div className="sidebar-widget">
          <div className="adv2"><img src="assets/img/adj.png" alt=""/></div>
        </div>
        <div className="sidebar-widget">
          <h3 className="c-title">Most Commented</h3>
          <div className="sidebar-post-list">
            {
              comments.length > 0
                ? comments.map(post =>
                  <div className="sidebar-post-item" key={post.post_id}>
                    <div className="left">
                      <div className="image" style={{ backgroundImage: `url(${post.feature_image})` }}>
                        <Link to="#" className="post-link post-link--v2">
                          <span className="post-link-icon"><i className="fal fa-link"></i></span>
                        </Link>
                      </div>
                      <span className="view">{post.view}</span>
                    </div>
                    <div className="right">
                      <h3 className="title"><Link to="/">{post.title}</Link></h3>
                      <div className="bottom">
                        <p className="date">{new Date(post.date).toLocaleDateString('vi-VN')}</p>
                        <div className="post-comment-count">
                          <span className="icon"><i className="fal fa-comments"></i></span>
                          <span>{post.comment_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                : <h3>Updating</h3>
            }
          </div>
        </div>
        <div className="sidebar-widget">
          <h3 className="c-title">Popular tags</h3>
          <div className="sidebar-tag-list">
            {
              tags.length > 0
              ? tags.map( tag => <Link to={`/tag/${tag.slug}`} className="sidebar-tag-item" key={tag.hashtag_id}>{tag.name}</Link> )
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
