import React from 'react'
import PostItem from '../General/PostItem';
import Loading from '../General/Loading';

export default function ArchivePosts({ homeArchivePosts, fetchingHomeArchivePosts, getHomeArchivePostsStatus }) {
  let post_layout = "vertical";

  return (
    <div className="archive" id="archive">
      <h3 className="c-title c-title--center">All articles</h3>
      <div className="container">
        {
          fetchingHomeArchivePosts
            ? <Loading />
            : getHomeArchivePostsStatus
              ? <div className={`post-list post-list--${post_layout}` }>
                {
                  homeArchivePosts.length > 0
                    ? homeArchivePosts.map(post => <PostItem key={post.post_id} post={post} />)
                    : <h3>No posts found</h3> || <h3>posts.err</h3>
                }
              </div>
              : <h1>No post yet!</h1>
        }
      </div>
    </div>
  )
}
