import React from 'react';
import PostItem from '../General/PostItem';
import Loading from '../General/Loading';

export default function FeaturedPosts({ featuredPosts, fetchingFeaturedPosts, getFeaturedPostsStatus }) {
  let post_layout = "horizontal";

  return (
    <div className="featured" id="trending">
      <h3 className="c-title">Featured articles</h3>
      {
        fetchingFeaturedPosts
          ? <Loading />
          : getFeaturedPostsStatus
            ? <div className={`post-list post-list--${post_layout}`}>
              {
                featuredPosts.length > 0
                  ? featuredPosts.map(post => <PostItem key={post.post_id} post={post} />)
                  : <h3>No posts found</h3> || <h3>posts.err</h3>
              }
            </div>
            : <h1>No post yet!</h1>
      }
    </div>
  )
}
