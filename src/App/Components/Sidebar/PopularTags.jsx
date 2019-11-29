import React from 'react';
import { Link } from 'react-router-dom';

export default function PopularTags({tagList}) {
  return (
    <>
      <h3 className="c-title">Popular tags</h3>
      <div className="tag-list">
        {
          !!tagList && tagList.length > 0
            ? tagList.map( tag => <Link to={`/tag/${tag.slug}`} className="tag-item" key={tag.hashtag_id}>{tag.name}</Link> )
            : ''
        }
      </div>
    </>
  )
}
