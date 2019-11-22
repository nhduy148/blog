import React from 'react'

const CommentItem = ({comment}) => {
  
  return (
    <div className="comment-group">
      <div className="comment-item">
        <div className="comment-avatar">
          <img src={comment.avatar} alt=""/>
        </div>
        <div className="comment-info">
          <div className="comment-top">
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-date">{new Date(comment.time).toLocaleDateString()}</p>
            <span className="comment-reply-button">reply</span>
          </div>
          <p className="comment-content">{comment.content}</p>
        </div>
      </div>
      {
        !!comment.reply && comment.reply.length > 0
        ? comment.reply.map( reply =>
            <div className="comment-item comment-item-reply">
              <div className="comment-avatar">
                <img src={reply.avatar} alt=""/>
              </div>
              <div className="comment-info">
                <div className="comment-top">
                  <h3 className="comment-name">{reply.name}</h3>
                  <p className="comment-date">{new Date(reply.time).toLocaleDateString()}</p>
                </div>
                <p className="comment-content">{reply.content}</p>
              </div>
            </div>
          )
        : ''
      }
    </div>
  )
}

export default CommentItem;
