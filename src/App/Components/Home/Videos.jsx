import React from 'react';
import Slider from 'react-slick';

export default function Videos({ homeVideos, getHomeVideosStatus }) {

  let settings = {
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1200,
  }

  return (
    <section className="video" id="video">
      <h3 className="c-title c-title--center">Videos</h3>
      <div className="container-fluid">
        {
          getHomeVideosStatus
            ? <Slider className="video-list" {...settings}>
                {homeVideos.map(video =>
                  <div
                    key={video.id.videoId}
                    className="video-item"
                  // style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}}
                  >
                    <div className="video-thumb">
                      <img src={video.snippet.thumbnails.high.url} alt="" />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://www.youtube.com/watch?v=" + video.id.videoId}
                        className="video-button"
                      >
                        <i className="video-icon fab fa-youtube"></i>
                      </a>
                    </div>
                    <h3 className="video-title">
                      <a target="_blank" rel="noopener noreferrer"
                        href={"https://www.youtube.com/watch?v=" + video.id.videoId} >
                        {video.snippet.title}
                      </a>
                    </h3>
                  </div>
                )}
              </Slider>

            : <h3 className="error" style={{color: "white"}}>Something went wrong!</h3>
        }
      </div>
    </section>
  )
}
