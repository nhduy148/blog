import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetails from '../Components/Single/PostDetails'
import Header from '../Layout/Header';
import { Comments } from '../Components/Single/Comments';
import Main from '../Layout/Main';

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
        <Main
          componentInside= {[
            <section className="single" id="single" key="Single">
              <PostDetails postData={postData} />
              
              <Comments comments={comments} />
            </section>
          ]}
          haveSidebar= {true}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Single)
