import React from 'react';
import { Link } from 'react-router-dom';

function LatestPosts ({latestPosts}) {
  return (
    <>
      <h3 className="c-title">Latest posts</h3>
      <div className="sidebar-post-list">
        {
          !!latestPosts && latestPosts.length > 0
            ? latestPosts.map(post =>
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
    </>
  )
}

export default LatestPosts