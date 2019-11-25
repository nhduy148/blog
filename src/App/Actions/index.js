import {
  PRE_LOADING,
  GET_CATEGORY_LIST,
  GET_TAG_LIST,
  GET_LATEST_POSTS,
  GET_MOST_COMMENT_POSTS,
} from '../Contants';

import Axios from 'axios';

export const loading = preLoading => ({
  type: PRE_LOADING,
  preLoading
})

export const getCategoryList = (categoryList, getCategoryListStatus) => ({
  type: GET_CATEGORY_LIST,
  categoryList,
  getCategoryListStatus
})

export const getTagList = (tagList, getTagListStatus) => ({
  type: GET_TAG_LIST,
  tagList,
  getTagListStatus
})

export const getLatestPosts = (latestPosts, getLatestPostsStatus) => ({
  type: GET_LATEST_POSTS,
  latestPosts,
  getLatestPostsStatus
})

export const getMostCommentPosts = (mostCommentPosts, getMostCommentPostsStatus) => ({
  type: GET_MOST_COMMENT_POSTS,
  mostCommentPosts,
  getMostCommentPostsStatus
})

// export const getCategoryList = (categoryList, getCategoryListStatus) => ({
//   type: GET_CATEGORY_LIST,
//   categoryList,
//   getCategoryListStatus
// })

export function fetchCategoryList() {
  return dispatch => {
    return Axios.get("http://localhost:5003/categories")
      .then( data => dispatch( getCategoryList( data.data, true ) ) )
      .catch( err => dispatch( getCategoryList( null, false ) ) )
  }
}

export function fetchTagList() {
  return dispatch => {
    
    return Axios.get("http://localhost:5003/tags")
      .then( data => dispatch( getTagList( data.data, true ) ) )
      .catch( err => dispatch( getTagList( null, false ) ) )
  }
}

export function fetchLatestPosts() {
  return dispatch => {
    return Axios.get("http://localhost:5003/posts?orderBy=date&order=DESC&limit=3")
      .then( data => dispatch( getLatestPosts( data.data, true ) ) )
      .catch( err => dispatch( getLatestPosts( null, false ) ) )
  }
}

export function fetchMostCommentPosts() {
  return dispatch => {
    return Axios.get("http://localhost:5003/posts?orderBy=comment_count&order=DESC&limit=3")
      .then( data => dispatch( getMostCommentPosts( data.data, true ) ) )
      .catch( err => dispatch( getMostCommentPosts( null, false ) ) )
  }
}