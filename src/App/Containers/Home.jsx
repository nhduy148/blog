import React, { Component } from 'react'
import Header from '../Layout/Header'
// import Footer from '../Layout/Footer'

// import { Link } from 'react-router-dom';
import LatestPosts from '../Components/Home/LatestPosts';
import Main from '../Layout/Main';

import { connect } from 'react-redux';
import { fetchLatestPosts, fetchHomeVideos } from '../Actions';
import Videos from '../Components/Home/Videos';

class Home extends Component {


  componentDidMount() {
    this.props.fetchLatestPosts();
    this.props.fetchHomeVideos();
  }

  render() {

    let { latestPosts, fetchingLatestPosts, getLatestPostsStatus, homeVideos, getHomeVideosStatus } = this.props;

    return (
      <>
        {/* https://jevelin.shufflehound.com/personal-blog/ */}
        <Header />
        <Main 
          componentInside = {
            <LatestPosts 
              key="LatestPosts" 
              latestPosts={latestPosts} 
              fetchingLatestPosts={fetchingLatestPosts}
              getLatestPostsStatus={getLatestPostsStatus} 
            />
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
  latestPosts: state.latestPosts,
  fetchingLatestPosts: state.fetchingLatestPosts,
  getLatestPostsStatus: state.getLatestPostsStatus,
  homeVideos: state.homeVideos,
  getHomeVideosStatus: state.getHomeVideosStatus
})

const mapDispatchToProps = dispatch => {
  return {
    fetchLatestPosts: () => {
      dispatch( fetchLatestPosts() );
    },
    fetchHomeVideos: () => {
      dispatch( fetchHomeVideos() );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
