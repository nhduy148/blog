import React, { Component } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

// import { Link } from 'react-router-dom';
import FeaturedPosts from '../Components/Home/FeaturedPosts';
import Main from '../Layout/Main';

import { connect } from 'react-redux';
import { fetchFeaturedPosts, fetchHomeVideos, fetchHomeArchivePosts } from '../Actions';
import Videos from '../Components/Home/Videos';
import ArchivePosts from '../Components/Home/ArchivePosts';
import MainVisual from '../Components/Home/MainVisual';

class Home extends Component {


  componentDidMount() {
    this.props.fetchFeaturedPosts();
    this.props.fetchHomeVideos();
    this.props.fetchHomeArchivePosts();
  }

  render() {

    let { 
      featuredPosts, fetchingFeaturedPosts, getFeaturedPostsStatus, 
      homeVideos, getHomeVideosStatus, 
      homeArchivePosts, fetchingHomeArchivePosts, getHomeArchivePostsStatus
    } = this.props;

    return (
      <>
        {/* https://jevelin.shufflehound.com/personal-blog/ */}
        <Header isFixed={false} />
        <Main 
          componentOutsideTop = {<MainVisual />}
          haveSidebar={true}
          componentInside = {
            <FeaturedPosts 
              key="FeaturedPosts" 
              featuredPosts={featuredPosts} 
              fetchingFeaturedPosts={fetchingFeaturedPosts}
              getFeaturedPostsStatus={getFeaturedPostsStatus} 
            />
          }
          componentOutsideBottom = {[
            <Videos key="Videos" homeVideos={homeVideos} getHomeVideosStatus={getHomeVideosStatus} />,
            <ArchivePosts 
              key="ArchivePosts" 
              homeArchivePosts={homeArchivePosts} 
              fetchingHomeArchivePosts={fetchingHomeArchivePosts}
              getHomeArchivePostsStatus={getHomeArchivePostsStatus} 
            />
          ]}
        />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  featuredPosts: state.featuredPosts,
  fetchingFeaturedPosts: state.fetchingFeaturedPosts,
  getFeaturedPostsStatus: state.getFeaturedPostsStatus,
  
  homeVideos: state.homeVideos,
  getHomeVideosStatus: state.getHomeVideosStatus,

  homeArchivePosts: state.homeArchivePosts,
  fetchingHomeArchivePosts: state.fetchingHomeArchivePosts,
  getHomeArchivePostsStatus: state.getHomeArchivePostsStatus
})

const mapDispatchToProps = dispatch => {
  return {
    fetchFeaturedPosts: () => {
      dispatch( fetchFeaturedPosts() );
    },
    fetchHomeArchivePosts: () => {
      dispatch( fetchHomeArchivePosts() );
    },
    fetchHomeVideos: () => {
      dispatch( fetchHomeVideos() );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
