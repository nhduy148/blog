import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../Assets/image/common/logo_white.png';
import SmallPostItem from '../Components/General/SmallPostItem';
import { fetchFooterRecentPosts } from '../Actions'

class Footer extends Component {

  componentDidMount() {
    this.props.fetchFooterRecentPosts();
  }

  componentWillReceiveProps(next) {
  }

  render() {
    let { tagList, getTagListStatus, footerRecentPosts, getFooterRecentPostsStatus } = this.props;
    
    return (
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-col">
              <div className="about">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
                <p className="about-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="footer-col">
              <div className="recent">
                <h3 className="c-title2">Recent Posts</h3>
                <div className="post-list">
                  {
                    getFooterRecentPostsStatus
                      ? footerRecentPosts.map(post => <SmallPostItem key={post.post_id} post={post} />)
                      : <h3>Updating</h3>
                  }
                </div>
              </div>
            </div>
            <div className="footer-col">
              <div className="tag">
                <h3 className="c-title2">Tags</h3>
                <div className="tag-list">
                  {
                    getTagListStatus
                      ? tagList.map(tag => <Link to={`/tag/${tag.slug}`} className="tag-item" key={tag.hashtag_id}>{tag.name}</Link>)
                      : <h3>Updating</h3>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright @ <b>SpaceD</b> | 2019</p>
      </footer>
    )
  }
}

const mapStateToProps = (state) => ({
  tagList: state.tagList,
  getTagListStatus: state.getTagListStatus,
  footerRecentPosts: state.footerRecentPosts,
  getFooterRecentPostsStatus: state.getFooterRecentPostsStatus,
})

const mapDispatchToProps = dispatch => ({
  fetchFooterRecentPosts: () => {
    dispatch(fetchFooterRecentPosts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
