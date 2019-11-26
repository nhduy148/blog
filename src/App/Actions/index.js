import {
  PRE_LOADING,
  GET_CATEGORY_LIST,
  GET_TAG_LIST,
  GET_LATEST_POSTS,
  GET_MOST_COMMENT_POSTS,
  GET_TRENDING_POSTS,
  GET_POST_DETAILS,
  GET_COMMENT_BY_POST,
  GET_HOME_VIDEOS,

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

export const getTrendingPosts = (trendingPosts, getTrendingPostsStatus) => ({
  type: GET_TRENDING_POSTS,
  trendingPosts,
  getTrendingPostsStatus
})

export const getHomeVideos = (homeVideos, getHomeVideosStatus) => ({
  type: GET_HOME_VIDEOS,
  homeVideos,
  getHomeVideosStatus
})

export const getPostDetails = (postDetails, getPostDetailsStatus) => ({
  type: GET_POST_DETAILS,
  postDetails,
  getPostDetailsStatus
})

export const getCommentByPost = (commentByPost, getCommentByPostStatus) => ({
  type: GET_COMMENT_BY_POST,
  commentByPost,
  getCommentByPostStatus
})

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

export function fetchTrendingPosts() {
  return dispatch => {
    return Axios.get("http://localhost:5003/posts?orderBy=view&order=DESC")
      .then( data => dispatch( getTrendingPosts( data.data, true ) ) )
      .catch( err => dispatch( getTrendingPosts( null, false ) ) )
  }
}

export function fetchPostDetails(post_slug) {
  return dispatch => {
    return Axios.get("http://localhost:5003/post/" + post_slug)
      .then( data => dispatch( getPostDetails( data.data, true ) ) )
      .catch( err => dispatch( getPostDetails( null, false ) ) )
  }
}

export function fetchCommentByPost(post_slug) {
  return dispatch => {
    return Axios.get("http://localhost:5003/comment/" + post_slug)
      .then( data => dispatch( getCommentByPost( data.data, true ) ) )
      .catch( err => dispatch( getCommentByPost( null, false ) ) )
  }
}

export function fetchHomeVideos() {
  return dispatch => {
    return Axios.get("http://localhost:5003/videos/")
      .then( data => dispatch( getHomeVideos( data.data.items, true ) ) )
      .catch( err => dispatch( getHomeVideos( null, false ) ) )
  }
}
