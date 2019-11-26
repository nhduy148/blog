import React, { Component } from 'react'
import Header from '../Layout/Header'
// import Footer from '../Layout/Footer'

// import { Link } from 'react-router-dom';
import Trending from '../Components/Home/Trending';
import Main from '../Layout/Main';

import { connect } from 'react-redux';
import { fetchTrendingPosts, fetchHomeVideos } from '../Actions';
import Videos from '../Components/Home/Videos';

class Home extends Component {


  componentDidMount() {
    this.props.fetchTrendingPosts();
    this.props.fetchHomeVideos();
  }

  render() {

    let { trendingPosts, getTrendingPostsStatus, homeVideos, getHomeVideosStatus } = this.props;

    return (
      <>
        {/* https://jevelin.shufflehound.com/personal-blog/ */}
        <Header />
        <Main 
          componentInside = {
            <Trending key="Trending" trendingPosts={trendingPosts} getTrendingPostsStatus={getTrendingPostsStatus} />
          }
          haveSidebar={true}
          componentOutside = {<Videos homeVideos={homeVideos} getHomeVideosStatus={getHomeVideosStatus} />}
        />
        {/* <Footer /> */}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trendingPosts: state.trendingPosts,
  getTrendingPostsStatus: state.getTrendingPostsStatus,
  homeVideos: state.homeVideos,
  getHomeVideosStatus: state.getHomeVideosStatus
})

const mapDispatchToProps = dispatch => {
  return {
    fetchTrendingPosts: () => {
      dispatch( fetchTrendingPosts() );
    },
    fetchHomeVideos: () => {
      dispatch( fetchHomeVideos() );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
