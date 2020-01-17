import React from 'react'
import PostItem from '../General/PostItem'
// import Loading from '../General/Loading'
import loading from '../../Assets/image/common/loading.gif';

const RelatedPosts = ({ relatedPosts, fetchingRelatedPosts, getRelatedPostsStatus}) => {
  const PreLoading = <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={loading} width="100" alt="" /></div>;

  return (
    <div className="related-post">
      <h3 className="c-title2">Related Posts</h3>
      <div className="related-post-inner">
      {
        fetchingRelatedPosts
          ? PreLoading
          : getRelatedPostsStatus
            ? relatedPosts.map( post => <PostItem key={post.post_id} post={post} related={true} /> )
            : <h1>Temporarily no related posts!</h1>
      }
      </div>
    </div>
  )
}
export default RelatedPosts;
