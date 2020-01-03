import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPostDetails, fetchRelatedPosts, fetchCommentByPost } from '../Actions'

import Header from '../Layout/Header';
import Main from '../Layout/Main';

import PostDetails from '../Components/Single/PostDetails';
import Comments from '../Components/Single/Comments';
import Footer from '../Layout/Footer';
import Banner from '../Components/General/Banner';
import RelatedPosts from '../Components/Single/RelatedPosts';


class Single extends Component {

  componentDidMount() {
    let post_slug = this.props.match.params.slug;    
    this.props.fetchPostDetails(post_slug);    
    this.props.fetchCommentByPost(post_slug);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let prevSlug = this.props.match.params.slug;
    let nextSlug = nextProps.match.params.slug;
    let postID = prevSlug;
    
    if( nextSlug !== prevSlug ) {
      this.props.fetchPostDetails(nextSlug); 
      this.props.fetchCommentByPost(nextSlug);   
      postID = nextSlug;
    }
    let oldStatus = this.props.getPostDetailsStatus;
    let newStatus = nextProps.getPostDetailsStatus;

    let { postDetails } = nextProps;

    if( ( oldStatus !== newStatus ) && newStatus ) {
      this.props.fetchRelatedPosts(postDetails.tags[0].slug, postID);
    }

  }



  render() {
    let { 
      postDetails, fetchingPostDetails, getPostDetailsStatus, 
      relatedPosts, fetchingRelatedPosts, getRelatedPostsStatus,
      commentByPost, fetchingCommentByPost, getCommentByPostStatus, 
      commentHasAdded, addCommentStatus
    } = this.props;

    let postID = this.props.match.params.slug;

    
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
              <RelatedPosts
                relatedPosts={relatedPosts} 
                fetchingRelatedPosts={fetchingRelatedPosts} 
                getRelatedPostsStatus={getRelatedPostsStatus} 
              />
              <Comments 
                commentByPost={commentByPost} 
                fetchingCommentByPost={fetchingCommentByPost} 
                getCommentByPostStatus={getCommentByPostStatus} 
                addCommentStatus={addCommentStatus} 
                commentHasAdded={commentHasAdded} 
                postID={postID}
              />
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
  
  relatedPosts: state.relatedPosts,
  fetchingRelatedPosts: state.fetchingRelatedPosts,
  getRelatedPostsStatus: state.getRelatedPostsStatus,

  commentByPost: state.commentByPost,
  fetchingCommentByPost: state.fetchingCommentByPost,
  getCommentByPostStatus: state.getCommentByPostStatus,

  commentHasAdded: state.commentHasAdded,
  addCommentStatus: state.addCommentStatus
})

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: (post_slug) => {
    dispatch( fetchPostDetails(post_slug) );
  },
  fetchRelatedPosts: (tag, postID) => {
    dispatch( fetchRelatedPosts(tag, postID) );
  },
  fetchCommentByPost: (post_slug) => {
    dispatch( fetchCommentByPost(post_slug) );
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Single)
