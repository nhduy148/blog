import React from 'react';

import banner from '../../Assets/image/banner/banner-5.jpg';
// import Breadcrumbs from './Breadcrumbs';

export default function Banner({ title, background}) {
  let background_url = !!background ? `url(${background})` : `url(${banner})`;
  title = !!title ? title : "<span></span><span></span><span></span>";

  return (
    <div className="banner flex-middle" style={{backgroundImage: background_url}}>
      <h3 className="banner-title" dangerouslySetInnerHTML={{ __html: title }} />
      {/* <Breadcrumbs /> */}
    </div>
  )
}
