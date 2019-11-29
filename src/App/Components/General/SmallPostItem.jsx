import React from 'react';
import { Link } from 'react-router-dom';

export default function SmallPostItem({post}) {
  return (
    <div className="post-item-small">
      <div className="left">
        <div className="image" style={{ backgroundImage: `url(${post.feature_image})` }}>
          <Link to={`/post/${post.post_id}`} className="post-link post-link--v2">
            <span className="post-link-icon"><i className="fal fa-link"></i></span>
          </Link>
        </div>
        <span className="view">{post.view}</span>
      </div>
      <div className="right">
        <h3 className="title"><Link to={`/post/${post.post_id}`}>{post.title}</Link></h3>
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
}
