import React from 'react';
import SmallPostItem from '../General/SmallPostItem';

function MostCommentPosts ({mostCommentPosts}) {
  return (
    <>
      <h3 className="c-title">Most Commented</h3>
      <div className="post-list">
        {
          !!mostCommentPosts && mostCommentPosts.length > 0
            ? mostCommentPosts.map(post => <SmallPostItem key={post.post_id} post={post} />)
            : <h3>Updating</h3>
        }
      </div>
    </>
  )
}

export default MostCommentPosts;
