import React from 'react';
import PostItem from '../General/PostItem';
import Loading from '../General/Loading';

export default function Trending({trendingPosts, getTrendingPostsStatus}) {
  return (
    <div className="trending" id="trending">
      <h3 className="c-title">Trending articles</h3>
      {
        getTrendingPostsStatus
          ? <div className="post-list post-list-horizontal">
              {
                trendingPosts.length > 0
                  ? trendingPosts.map(post => <PostItem key={post.post_id} post={post} />)
                  : <h3>No posts found</h3> || <h3>posts.err</h3>
              }
            </div>
          : <Loading />
      }
    </div>
  )
}
