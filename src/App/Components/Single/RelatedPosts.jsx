import React from 'react'
import PostItem from '../General/PostItem'
import Loading from '../General/Loading'

const RelatedPosts = ({ relatedPosts, fetchingRelatedPosts, getRelatedPostsStatus}) => {
  return (
    <div className="related-post">
      <h3 className="c-title2">Related Posts</h3>
      <div className="related-post-inner">
      {
        fetchingRelatedPosts
          ? <Loading />
          : getRelatedPostsStatus
            ? relatedPosts.map( post => <PostItem key={post.post_id} post={post} related={true} /> )
            : <h1>Temporarily no related posts!</h1>
      }
      </div>
    </div>
  )
}
export default RelatedPosts;
