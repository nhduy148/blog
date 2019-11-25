import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = ({ postData }) => {

  const postDate = time => {
    let dayNow = new Date( time );

    let hms = dayNow.toLocaleTimeString();
    let date = dayNow.getDate();
    let month = dayNow.toLocaleString('en-US', { month: 'long' });
    let year = dayNow.getFullYear();

    return `${hms} - ${date} ${month}, ${year}`
  }
  

  return (
    <div className="post-details">
      <div className="thumb">
        <img src={postData.feature_image} alt="" />
      </div>
      <h3 className="title">{postData.title}</h3>
      <div className="info">
        <p className="author">by <span className="author-name">{postData.author}</span></p>
        <p className="date">{postDate(postData.date)}</p>
        <p className="cat-list">
          {
            !!postData.category
              ? postData.category.map( cat => <Link key={cat.category_id} to={`category/${cat.slug}`} className="cat-item">{cat.name}</Link> )
              : ''
          }
        </p>
      </div>
      <div className="content" id="blog-content" dangerouslySetInnerHTML={{ __html: postData.content }} />
      <div className="tag-list">
          {
            !!postData.tags
              ? postData.tags.map( tag => <Link key={tag.category_id} to={`category/${tag.slug}`} className="tag-item">{tag.name}</Link> )
              : ''
          }   
      </div>
    </div>
  )
}

export default PostDetails;
