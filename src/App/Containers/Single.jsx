import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPostDetails, fetchCommentByPost } from '../Actions'

import Header from '../Layout/Header';
import Main from '../Layout/Main';

import PostDetails from '../Components/Single/PostDetails';
import Comments from '../Components/Single/Comments';
import Footer from '../Layout/Footer';
import Banner from '../Components/General/Banner';


class Single extends Component {

  componentDidMount() {
    let post_slug = this.props.match.params.slug;    
    this.props.fetchPostDetails(post_slug);    
    // this.props.fetchCommentByPost(post_slug);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let prevSlug = this.props.match.params.slug;
    let nextSlug = nextProps.match.params.slug;
    if( nextSlug !== prevSlug ) {
      this.props.fetchPostDetails(nextSlug);    
      this.props.fetchCommentByPost(nextSlug);
    }
  }

  render() {
    let { postDetails, fetchingPostDetails, getPostDetailsStatus, commentByPost, getCommentByPostStatus } = this.props;
    let banner_title = !!postDetails ? postDetails.title : null;

    return (
      <>
        <Header />
        <Banner title={banner_title} />
        <Main
          componentInside= {
            <section className="single" id="single">
              <PostDetails 
                postDetails={postDetails} 
                fetchingPostDetails={fetchingPostDetails} 
                getPostDetailsStatus={getPostDetailsStatus} 
              />              
              <Comments commentByPost={commentByPost} getCommentByPostStatus={getCommentByPostStatus} />
            </section>
          }
          haveSidebar= {true}
        />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  postDetails: state.postDetails,
  fetchingPostDetails: state.fetchingPostDetails,
  getPostDetailsStatus: state.getPostDetailsStatus,

  commentByPost: state.commentByPost,
  getCommentByPostStatus: state.getCommentByPostStatus
})

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: (post_slug) => {
    dispatch( fetchPostDetails(post_slug) );
  },
  fetchCommentByPost: (post_slug) => {
    dispatch( fetchCommentByPost(post_slug) );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Single)
