import React from 'react';
import PostItem from '../General/PostItem';
import Loading from '../General/Loading';

export default function LatestPosts({latestPosts, fetchingLatestPosts, getLatestPostsStatus}) {
  
  return fetchingLatestPosts
    ? <Loading />
    : <div className="trending" id="trending">
        <h3 className="c-title">Latest articles</h3>
        {
          getLatestPostsStatus
            ? <div className="post-list post-list-horizontal">
                {
                  latestPosts.length > 0
                    ? latestPosts.map(post => <PostItem key={post.post_id} post={post} />)
                    : <h3>No posts found</h3> || <h3>posts.err</h3>
                }
              </div>
            : <h1>No post yet!</h1>
        }
      </div>
}
