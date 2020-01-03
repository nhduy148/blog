import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../General/Loading';

const PostDetails = ({ postDetails, fetchingPostDetails, getPostDetailsStatus }) => {

  const postDate = time => {
    let dayNow = new Date(time);

    let hms = dayNow.toLocaleTimeString();
    let date = dayNow.getDate();
    let month = dayNow.toLocaleString('en-US', { month: 'long' });
    let year = dayNow.getFullYear();

    return `${hms} - ${date} ${month}, ${year}`
  }

  return (
    <div className="post-details">
      {
        fetchingPostDetails
          ? <Loading />
          : getPostDetailsStatus
            ? <>
              < div className="thumb">
                <img src={postDetails.feature_image} alt="" />
              </div>
              <h3 className="title">{postDetails.title}</h3>
              <div className="info">
                <p className="author">by <span className="author-name">{postDetails.author}</span></p>
                <p className="date">{postDate(postDetails.date)}</p>
                <p className="cat-list">
                  {
                    !!postDetails.category
                      ? postDetails.category.map(cat => <Link key={cat.category_id} to={`/category/${cat.slug}`} className="cat-item">{cat.name}</Link>)
                      : ''
                  }
                </p>
              </div>
              <div className="content" id="blog-content" dangerouslySetInnerHTML={{ __html: postDetails.content }} />
              <div className="post-details-group">
                <div className="post-details-group">
                  <h5>Tags In: </h5>
                  {
                    !!postDetails.tags
                      ? postDetails.tags.map(tag => <Link key={tag.hashtag_id} to={`/tag/${tag.slug}`} className="tag-item">{tag.name}</Link>)
                      : ''
                  }
                </div>
                <div className="post-details-group">
                  <h5>Share: </h5>
                  <Link to="#" className="share-icon share-icon--facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#" className="share-icon share-icon--twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="#" className="share-icon share-icon--instagram"><i className="fab fa-instagram"> </i></Link>
                </div>
              </div>
            </>
            : <h1>Post not found!</h1>
      }
    </div >
  )
}

export default PostDetails;
