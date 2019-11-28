import React from 'react'
import CommentItem from './CommentItem'
// import Loading from '../General/Loading'

export const Comments = ({ commentByPost, getCommentByPostStatus }) => {
  return getCommentByPostStatus
    ?
    <div className="comment">
      <div className="comment-list">
        {
          commentByPost.length > 0
            ? commentByPost.map(comment => <CommentItem key={comment.comment_id} comment={comment} />)
            : <h3>No comment yet!</h3>
        }
      </div>
      <div className="comment-form">
        <h3 className="comment-form-title">Leave a Comment</h3>
        <form action="POST" id="comment">
          <div className="comment-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="comment-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="comment-form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="45" rows="8"></textarea>
          </div>
          <div className="comment-form-button">
            <button type="submit">Send a comment</button>
          </div>
        </form>
      </div>
    </div>
    : ''
  // : <Loading />
}
