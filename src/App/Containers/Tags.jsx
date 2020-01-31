import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Main from '../Layout/Main';
import Banner from '../Components/General/Banner';
import { fetchPostsByTag } from '../Actions'
import Loading from '../Components/General/Loading';
import PostItem from '../Components/General/PostItem';

class Category extends Component {

  componentDidMount() {
    let tag = this.props.match.params.tag;
    this.props.fetchPostsByTag(tag);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let oldTag = this.props.match.params.tag;
    let newTag = nextProps.match.params.tag;
    if (oldTag !== newTag) this.props.fetchPostsByTag(newTag);
  }

  render() {
    let post_layout = "vertical";
    let { tagPosts, fetchingPostsByTag, getPostsByTagStatus } = this.props;
    let banner_title = !!tagPosts && tagPosts.name ? `Tag : ${tagPosts.name}` : tagPosts;

    return (
      <>
        <Header />
        <Banner title={banner_title} />
        <Main
          componentInside={
            <div className="container">
              {
                fetchingPostsByTag
                  ? <Loading />
                  : getPostsByTagStatus
                    ? <div className={`post-list post-list--${post_layout} post-list--2col`}>
                      {
                        !!tagPosts.err
                          ? <h3>{tagPosts.err}</h3> || <h3>No posts found</h3>
                          : tagPosts.posts.map(post => <PostItem key={post.post_id} post={post} />)
                      }
                    </div>
                    : <h1>No post yet!</h1>
              }
            </div>
          }
          haveSidebar={true}
        />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  tagPosts: state.tagPosts,
  fetchingPostsByTag: state.fetchingPostsByTag,
  getPostsByTagStatus: state.getPostsByTagStatus
})

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsByTag: (tag) => {
      dispatch(fetchPostsByTag(tag))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
