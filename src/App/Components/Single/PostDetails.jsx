import React from 'react'

const PostDetails = ({ postData }) => {
  return (
    <div className="post-details">
      <div className="thumb">
        <img src={postData.feature_image} alt="" />
      </div>
      <h3 className="title">{postData.title}</h3>
      <div className="info">
        <p className="author">by <span className="author-name">{postData.author}</span></p>
        <p className="date">{new Date(postData.date).toLocaleString()}</p>
        <p className="cats"></p>
      </div>
      <div className="content" id="blog-content">
        {postData.content}
      </div>
      <div className="tag-list">
        <span className="tag-item"></span>
      </div>
    </div>
  )
}

export default PostDetails;
