import React, { useState, useEffect } from 'react';
import { actionAddComment } from '../../Actions';
import { connect } from 'react-redux';

function CommentForm({postID, actionAddComment}) {

  async function addComment(e, postID) {
    e.preventDefault();
    const data = await {
      name: e.target.name.value,
      email: e.target.email.value,
      content: e.target.content.value,
      avatar: e.target.avatar.value
    }
    actionAddComment(postID, data)
  }

  const avatarArr = [
    {name: "Iron Man", url: "/avatar/iron-man.jpg"},
    {name: "Spider Man", url: "/avatar/spider-man.jpg"},
    {name: "Captain America", url: "/avatar/cap.jpg"},
    {name: "Thor", url: "/avatar/thor.jpg"},
    {name: "Clint Barton", url: "/avatar/hawkeye.jpg"},
    {name: "Doctor Strange", url: "/avatar/strange.jpg"},
    {name: "Hulk", url: "/avatar/hulk.jpg"},
    {name: "Black Widow", url: "/avatar/nat.jpg"},
    {name: "Deadpool", url: "/avatar/deadpool.jpg"}
  ]

  const [avt, setAvt] = useState(avatarArr[0]);
  const [choice, setChoice] = useState(false);

  return (
    <div className="comment-form">
      <h3 className="c-title2">Leave a Comment</h3>
      <form action="POST" id="comment" onSubmit={(e) => addComment(e, postID)}>
        <div className="comment-form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="comment-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="comment-form-group">
          <label htmlFor="content">Message</label>
          <textarea name="content" id="content" cols="45" rows="8"></textarea>
        </div>
        <div className="comment-form-group choice-avt">
          <label htmlFor="link">Choice avatar : </label>
          <input type="hidden" name="avatar" value={avt.url} />

          <div className="selected" onClick={ () => setChoice(!choice) }>
            <div className="selected-image"><img src={avt.url} alt=""/></div>
            <span className="selected-name">{avt.name}</span>
            <span className="selected-arrow"><i className="fas fa-caret-down"></i></span>

            <ul className={`choice-avt-list${choice ? " is-open" : ""}`}>
              {
                avatarArr.map( (item, i) => 
                  item.name !== avt.name 
                  ? <li key={i} onClick={ () => setAvt(item) } >
                      <div className="image"><img src={item.url} alt=""/></div>
                      <span className="name">{item.name}</span>
                    </li>
                  : ""
                )
              }
            </ul>
          </div>

        </div>
        <div className="comment-form-button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    actionAddComment: (postID, data) => {
      dispatch( actionAddComment(postID, data) );
    }
  }
}

export default connect(null, mapDispatch)(CommentForm)