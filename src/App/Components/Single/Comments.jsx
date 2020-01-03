import React from 'react'
import CommentItem from './CommentItem'
import Loading from '../General/Loading';
import CommentForm from './CommentForm';
import no_cmt from '../../Assets/image/common/no-cmt.png';

const Comments = ({ postID, commentByPost, fetchingCommentByPost, getCommentByPostStatus, commentHasAdded }) => {

  const totalComments = (total) => {
    return total > 1 ?
      `${total} comments`
      : total = 1 ?
        `${total} comment`
        : `No comment yet!`
  }

  let commentList = !!commentByPost ? commentByPost.list : [];

  commentList = !!commentHasAdded ? [commentHasAdded, ...commentList] : commentList;

  return fetchingCommentByPost
  ? <Loading />
  : 
      <div className="comment">
        {
          getCommentByPostStatus
          ?
            <div className="comment-list">
              <h3 className="c-title2">
                { totalComments(commentByPost.total) }
              </h3>
              { commentList.map(comment => <CommentItem key={comment.comment_id} comment={comment} />) }
            </div>
          : <div className="comment-empty">
              <div className="comment-empty-icon">
                <img src={no_cmt} alt=""/>
              </div>
              <h3>No comment yet!</h3>
              <p>Be the first to comment</p>
          </div>
        }
        <CommentForm postID={postID} />
      </div>

  // return (
  //   <div className="comment">
  //     <CommentForm />
  //   </div>
  // )
}
export default Comments;
