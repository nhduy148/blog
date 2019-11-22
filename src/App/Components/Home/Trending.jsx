import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Trending extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch("http://localhost:5003/posts?orderBy=view&order=DESC")
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {

    const config = require('../../app.settings.json');
    
    let postLink = post => config.slug === "slug" ? `/post/${post.slug}` : `/post/${post.post_id}`

    let { posts } = this.state;

    return (
      <div className="trending" id="trending">
        <h3 className="c-title">Trending articles</h3>

        <div className="post-list post-list-horizontal">
          {
            posts.length > 0
            ? posts.map(post =>
              <div className="post-item post-horizontal" key={post.post_id}>
                <div className="post-image" style={{backgroundImage: `url(${post.feature_image})`}}>
                  <Link to={postLink(post)} className="post-link">
                    <span className="post-link-icon"><i className="fal fa-link"></i></span>
                  </Link>
                </div>
                <div className="post-content">
                  <h5 className="post-title"><Link to={postLink(post)}>{post.title}</Link></h5>
                  <div className="post-info">
                    <p className="post-author">by <span className="post-author-name">{post.author}</span></p>
                    <p className="post-date">{ new Date(post.date).toLocaleString() }</p>
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
            : <h3>No posts found</h3> || <h3>posts.err</h3>
          }
        </div>
      </div>
    )
  }
}

