import React, { Component } from 'react';
import MostViewPosts from '../Components/Sidebar/MostViewPosts';
import MostCommentPosts from '../Components/Sidebar/MostCommentPosts';
import Socials from '../Components/Sidebar/Socials';
import Adv from '../Components/Sidebar/Adv';
import PopularTags from '../Components/Sidebar/PopularTags';

import { connect } from 'react-redux';
import { fetchTagList, fetchMostViewPosts, fetchMostCommentPosts } from '../Actions';

class Sidebar extends Component {

  state = {
    latest: [],
    comments: [],
  }

  componentDidMount() {
    this.props.fetchMostViewPosts();
    this.props.fetchMostCommentPosts();
    this.props.fetchTagList();
  }


  render() {

    let { tagList, mostViewPosts, mostCommentPosts } = this.props;
    
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-widget">
          <MostViewPosts mostViewPosts={mostViewPosts} />
        </div>
        <div className="sidebar-widget">
          <Adv />
        </div>
        <div className="sidebar-widget">
          <MostCommentPosts mostCommentPosts={mostCommentPosts} />
        </div>
        <div className="sidebar-widget">
          <Socials />
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
  mostViewPosts: state.mostViewPosts,
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
    fetchMostViewPosts: () => {
      dispatchEvent( fetchMostViewPosts() )
    },
    fetchMostCommentPosts: () => {
      dispatchEvent( fetchMostCommentPosts() )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
