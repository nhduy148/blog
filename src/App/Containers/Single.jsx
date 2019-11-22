import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetails from '../Components/Single/PostDetails'
import Header from '../Layout/Header';
import CommentItem from '../Components/Single/CommentItem';

class Single extends Component {

  state = {
    postData: {},
    comments: []
  }

  componentDidMount() {
    let post_slug = this.props.match.params.slug;

    fetch("http://localhost:5003/post/" + post_slug)
      .then(res => res.json())
      .then(postData => this.setState({ postData }))

    fetch("http://localhost:5003/comment/" + post_slug)
      .then(res => res.json())
      .then(comments => this.setState({ comments }))
  }

  render() {
    let { postData, comments } = this.state;
    
    return (
      <>
        <Header />
        <section className="single" id="single">
          <PostDetails postData={postData} />
          <div className="related-post"></div>
          <div className="comment">
            <div className="comment-list">
              {
                comments.map(comment => <CommentItem comment={comment} />)
              }
            </div>
            <div className="comment-form">
              <h3 className="comment-form-title">Leave a Comment</h3>
              <form action="POST" id="comment">
                <div className="comment-form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="comment-form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="comment-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols="45" rows="8"></textarea>
                </div>
                <div className="comment-form-button">
                  <button type="submit">Send a comment</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Single)
