import React, { Component } from 'react';
import LatestPosts from '../Components/Sidebar/LatestPosts';
import MostCommentPosts from '../Components/Sidebar/MostCommentPosts';
import Socials from '../Components/Sidebar/Socials';
import Adv from '../Components/Sidebar/Adv';
import PopularTags from '../Components/Sidebar/PopularTags';

import { connect } from 'react-redux';
import { fetchTagList, fetchLatestPosts, fetchMostCommentPosts } from '../Actions';

class Sidebar extends Component {

  state = {
    latest: [],
    comments: [],
  }

  componentDidMount() {
    this.props.fetchTagList();
    this.props.fetchLatestPosts();
    this.props.fetchMostCommentPosts();
  }


  render() {

    let { tagList, latestPosts, mostCommentPosts } = this.props;

    console.log( this.props );

    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-widget">
          <LatestPosts latestPosts={latestPosts} />
        </div>
        <div className="sidebar-widget">
          <Socials />
        </div>
        <div className="sidebar-widget">
          <Adv />
        </div>
        <div className="sidebar-widget">
          <MostCommentPosts mostCommentPosts={mostCommentPosts} />
        </div>
        <div className="sidebar-widget">
          <PopularTags tagList={tagList} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tagList: state.tagList,
  latestPosts: state.latestPosts,
  mostCommentPosts: state.mostCommentPosts,

  getLatestPostsStatus: state.getLatestPostsStatus,
  getMostCommentPostsStatus: state.getMostCommentPostsStatus,
  getTagListStatus: state.getTagListStatus
})

const mapDispatchToProps = dispatchEvent => {  
  return {
    fetchTagList: () => {
      dispatchEvent( fetchTagList() );
    },
    fetchLatestPosts: () => {
      dispatchEvent( fetchLatestPosts() )
    },
    fetchMostCommentPosts: () => {
      dispatchEvent( fetchMostCommentPosts() )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
