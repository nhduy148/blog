import React, { useEffect } from 'react'
import CommentItem from './CommentItem'
import CommentForm from './CommentForm';
import no_cmt from '../../Assets/image/common/no-cmt.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentByPost, loadMoreComments } from '../../Actions';
import loading from '../../Assets/image/common/loading.gif';

function Comments({ postID }) {

  let props = useSelector( state => {
    return {
      listComments : state.listComments,
      listCommentsInfo : state.listCommentsInfo,
      getCommentByPostStatus : state.getCommentByPostStatus,
      fetchingCommentByPost : state.fetchingCommentByPost,
      addCommentReponse : state.addCommentReponse,
      addCommentStatus : state.addCommentStatus,
    }
  });

  let {
    listComments,
    listCommentsInfo,
    getCommentByPostStatus,
    fetchingCommentByPost,
    addCommentReponse,
  } = props;
  
  let dispatch = useDispatch();
  
  const totalComments = (total) => {
    return total > 1 ?
      `${total} comments`
      : total = 1 ?
        `${total} comment`
        : `No comment yet!`
  }

  useEffect(() => {
    if(postID) dispatch( fetchCommentByPost(postID) );
  }, [postID, dispatch]);

  useEffect(() => {
    if(addCommentReponse === true) {
      document.getElementById("comment").reset();
    }
  }, [addCommentReponse]);


  const remaining = !!listCommentsInfo && listCommentsInfo.remaining > 0 ? "See more" : false;

  const nextListComments = !!listCommentsInfo && listCommentsInfo.hasNextPage ? listCommentsInfo.nextPage : null;

  const PreLoading = <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={loading} width="100" alt="" /></div>;

  return (
    <div className="comment">
      {
        fetchingCommentByPost && !getCommentByPostStatus
          ? PreLoading
          : listComments.length > 0 && getCommentByPostStatus
            ? <div className="comment-list">
                <h3 className="c-title2">
                  {totalComments(listCommentsInfo.total)}
                </h3>
                {listComments.map((comment, i) => <CommentItem key={i} comment={comment} />)}
                {
                  getCommentByPostStatus && remaining !== false
                  ? fetchingCommentByPost 
                    ? PreLoading 
                    : <div className="comment-remaining">
                        <span onClick={() => dispatch(loadMoreComments(postID, nextListComments))}>{remaining}</span>
                      </div>
                  : ""
                }
              </div>
            : <div className="comment-empty">
              <div className="comment-empty-icon">
                <img src={no_cmt} alt="" />
              </div>
              <h3>No comment yet!</h3>
              <p>Be the first to comment</p>
            </div>
      }
      <CommentForm postID={postID} />
    </div>
  )
}

export default Comments;
