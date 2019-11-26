import React from 'react'
import { Link } from 'react-router-dom'

export default function PostItem({post}) {

  const config = require('../../app.settings.json');
    
  const postLink = post => config.slug === "slug" ? `/post/${post.slug}` : `/post/${post.post_id}`

  const postDate = time => {
    let dayNow = new Date(time);
    let date = dayNow.getDate();
    let month = dayNow.toLocaleString('en-US', { month: 'long' });
    let year = dayNow.getFullYear();

    return `${date} ${month}, ${year}`
  }

  return (
    <div className="post-item post-horizontal">
      <div className="post-image" style={{backgroundImage: `url(${post.feature_image})`}}>
        <Link to={postLink(post)} className="post-link">
          <span className="post-link-icon"><i className="fal fa-link"></i></span>
        </Link>
      </div>
      <div className="post-content">
        <h5 className="post-title"><Link to={postLink(post)}>{post.title}</Link></h5>
        <div className="post-info">
          <p className="post-author">by <span className="post-author-name">{post.author}</span></p>
          <p className="post-date">{ postDate(post.date) }</p>
        </div>
        <p className="post-excerpt">{post.except}...</p>
        <div className="post-additional">
          <div className="post-tag-list">
            <span className="icon"><i className="fal fa-tag"></i></span>
            {
              !!post.tags && post.tags.length > 0
                ? post.tags.map( (tag, i) => i === post.tags.length-1 ? <span className="post-tag" key={tag.hashtag_id}>{tag.name}</span> : <span className="post-tag" key={tag.hashtag_id}>{tag.name}, </span> )
                : ''
            }
          </div>

          <div className="post-comment-count">
            <span className="icon"><i className="fal fa-comments"></i></span>
            <span>{post.comment_count}</span>
          </div>
          <div className="post-view-count">
            <span className="icon"><i className="fal fa-eye"></i></span>
            <span>{post.view}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
