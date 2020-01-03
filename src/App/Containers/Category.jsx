import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Main from '../Layout/Main';
import Banner from '../Components/General/Banner';
import { fetchPostsByCategory } from '../Actions'
import Loading from '../Components/General/Loading';
import PostItem from '../Components/General/PostItem';

class Category extends Component {

  componentDidMount() {
    let category = this.props.match.params.category;
    this.props.fetchPostsByCategory(category);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let oldCategory = this.props.match.params.category;
    let newCategory = nextProps.match.params.category;
    if (oldCategory !== newCategory) this.props.fetchPostsByCategory(newCategory);
  }

  render() {
    let post_layout = "vertical";
    let { categoryPosts, fetchingPostsByCategory, getPostsByCategoryStatus } = this.props;
    let banner_title = !!categoryPosts ? categoryPosts.name : null;

    return (
      <>
        <Header />
        <Banner title={banner_title} />
        <Main
          componentInside={
            <div className="container">
              {
                fetchingPostsByCategory
                  ? <Loading />
                  : getPostsByCategoryStatus
                    ? <div className={`post-list post-list--${post_layout} post-list--2col`}>
                      {
                        !!categoryPosts.err
                          ? <h3>{categoryPosts.err}</h3> || <h3>No posts found</h3>
                          : categoryPosts.posts.map(post => <PostItem key={post.post_id} post={post} />)
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
  categoryPosts: state.categoryPosts,
  fetchingPostsByCategory: state.fetchingPostsByCategory,
  getPostsByCategoryStatus: state.getPostsByCategoryStatus
})

const mapDispatchToProps = dispatch => {
  return {
    fetchPostsByCategory: (category) => {
      dispatch(fetchPostsByCategory(category))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
