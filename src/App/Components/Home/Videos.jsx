import React from 'react';
import Slider from 'react-slick';

export default function Videos({ homeVideos, getHomeVideosStatus }) {

  let settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000,
    speed: 1200,
  }
  return (
    <section className="post-video" id="post-video">
      <h3 class="c-title c-title--center">Videos</h3>
      <Slider className="post-video-list" {...settings}>
        {
          getHomeVideosStatus
          ? 
            homeVideos.map( video => 
            <div 
              key={video.id.videoId}
              className="post-video-item" 
              // style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}}
            >
              <div className="post-video-thumb">
                <img src={video.snippet.thumbnails.high.url} alt=""/>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={"https://www.youtube.com/watch?v="+video.id.videoId}
                  className="post-video-button"
                >
                  <i className="post-video-icon fab fa-youtube"></i>
                </a>
              </div>
              <h3 className="post-video-title">
                <a target="_blank" rel="noopener noreferrer" 
                  href={"https://www.youtube.com/watch?v="+video.id.videoId} >
                  {video.snippet.title}
                </a>
              </h3>
            </div>
          )
          : ''
        }
      </Slider>
    </section>
  )
}
