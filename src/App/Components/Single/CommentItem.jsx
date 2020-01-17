import React from 'react';
// import default_user_icon from '../../Assets/image/common/comment-user-default.png'

const CommentItem = ({ comment }) => {

  const timeSince = (time) => {
    let currentTime = Date.now();
    let seconds = Math.floor((currentTime - time) / 1000);
    let overYear = Math.floor(seconds / 31536000)
    let overMonth = Math.floor(seconds / 2592000)
    let overDay = Math.floor(seconds / 86400)
    let overHour = Math.floor(seconds / 3600)
    let overMinutes = Math.floor(seconds / 60)
    let fullDate = new Date(time).toLocaleDateString();
    // return fullDate;
    return overYear >= 1
      ? `${overYear} years ago.`
      : overMonth >= 1
        ? `${overMonth} months ago.`
        : overDay >= 1
          ? `${overDay} days ago.`
          : overHour >= 1
            ? `${overHour} hours ago.`
            : overMinutes >= 1
              ? `${overMinutes} minutes ago.`
              : seconds >= 1
                ? `${seconds} seconds ago.`
                : seconds <= 1
                  ? `just now.`
                  : fullDate

  }

  return (
    <div className="comment-group">
      <div className="comment-item flex-wrap">
        <div className="comment-avatar">
          {/* <img src={reply.avatar} alt="" /> */}
          <img src={comment.avatar} alt="" />
        </div>
        <div className="comment-info">
          <h3 className="comment-name flex">{comment.name}<p className="comment-email">{comment.email}</p></h3>
          <p className="comment-time">{timeSince(comment.time)}</p>
          <span className="comment-reply">Reply</span>
        </div>
        <p className="comment-content">{comment.content}</p>
      </div>
      {
        // !!comment.reply && comment.reply.length > 0
        //   ? comment.reply.map((reply, i) =>
        //     <div className="comment-item comment-item-reply flex-wrap" key={i}>
        //       <div className="comment-avatar">
        //         <img src={reply.avatar} alt="" />
        //         {/* <img src={default_user_icon} alt="" /> */}
        //       </div>
        //       <div className="comment-info">
        //         <h3 className="comment-name flex">{reply.name}<p className="comment-email">{reply.email}</p></h3>
        //         <p className="comment-time">{timeSince(reply.time)}</p>
        //       </div>

        //       <p className="comment-content">{reply.content}</p>
        //     </div>
        //   )
        //   : ''
      }
    </div>
  )
}

export default CommentItem;
