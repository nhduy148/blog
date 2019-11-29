import React from 'react';
import SmallPostItem from '../General/SmallPostItem';

function MostViewPosts ({mostViewPosts}) {
  return (
    <>
      <h3 className="c-title">Most Viewed</h3>
      <div className="post-list">
        {
          !!mostViewPosts && mostViewPosts.length > 0
            ? mostViewPosts.map(post => <SmallPostItem key={post.post_id} post={post} />)
            : <h3>Updating</h3>
        }
      </div>
    </>
  )
}

export default MostViewPosts;