import {
  PRE_LOADING,
  GET_CATEGORY_LIST,
  GET_TAG_LIST,
  GET_FEATURED_POSTS,
  GET_MOST_COMMENT_POSTS,
  GET_MOST_VIEW_POSTS,
  GET_POST_DETAILS,
  GET_COMMENT_BY_POST,
  HOME_GET_VIDEOS,
  HOME_GET_ARCHIVE_POSTS,
  FOOTER_GET_RECENT_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_RELATED_POSTS,
  ADD_COMMENT

}
from '../Contants';

import Axios from 'axios';
const querystring = require('querystring');

const API = "http://localhost:5003"

// ********************************************************************************************************************************** //
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

export const getFeaturedPosts = (featuredPosts, fetchingFeaturedPosts, getFeaturedPostsStatus) => ({
  type: GET_FEATURED_POSTS,
  featuredPosts,
  fetchingFeaturedPosts,
  getFeaturedPostsStatus
})

export const getHomeVideos = (homeVideos, getHomeVideosStatus) => ({
  type: HOME_GET_VIDEOS,
  homeVideos,
  getHomeVideosStatus
})

export const getHomeArchivePosts = (homeArchivePosts, fetchingHomeArchivePosts, getHomeArchivePostsStatus) => ({
  type: HOME_GET_ARCHIVE_POSTS,
  homeArchivePosts,
  fetchingHomeArchivePosts,
  getHomeArchivePostsStatus
})

export const getMostCommentPosts = (mostCommentPosts, getMostCommentPostsStatus) => ({
  type: GET_MOST_COMMENT_POSTS,
  mostCommentPosts,
  getMostCommentPostsStatus
})

export const getMostViewPosts = (mostViewPosts, getMostViewPostsStatus) => ({
  type: GET_MOST_VIEW_POSTS,
  mostViewPosts,
  getMostViewPostsStatus
})

export const getPostDetails = (postDetails, fetchingPostDetails, getPostDetailsStatus) => ({
  type: GET_POST_DETAILS,
  postDetails,
  fetchingPostDetails,
  getPostDetailsStatus
})

export const getRelatedPosts = (relatedPosts, fetchingRelatedPosts, getRelatedPostsStatus) => ({
  type: GET_RELATED_POSTS,
  relatedPosts,
  fetchingRelatedPosts,
  getRelatedPostsStatus
})

export const getCommentByPost = (commentByPost, fetchingCommentByPost, getCommentByPostStatus) => ({
  type: GET_COMMENT_BY_POST,
  commentByPost,
  fetchingCommentByPost,
  getCommentByPostStatus
})

export const getFooterRecentPosts = (footerRecentPosts, getFooterRecentPostsStatus) => ({
  type: FOOTER_GET_RECENT_POSTS,
  footerRecentPosts,
  getFooterRecentPostsStatus
})

export const getPostsByCategory = (categoryPosts, fetchingPostsByCategory, getPostsByCategoryStatus) => ({
  type: GET_POSTS_BY_CATEGORY,
  categoryPosts,
  fetchingPostsByCategory,
  getPostsByCategoryStatus
})

export const addComment = (commentHasAdded, addCommentStatus) => ({
  type: ADD_COMMENT,
  commentHasAdded,
  addCommentStatus,
})

// ********************************************************************************************************************************** //

export function fetchCategoryList() {
  return dispatch => {
    return Axios.get(API+"/categories")
      .then(data => dispatch(getCategoryList(data.data, true)))
      .catch(err => dispatch(getCategoryList(null, false)))
  }
}

export function fetchTagList() {
  return dispatch => {

    return Axios.get(API+"/tags")
      .then(data => dispatch(getTagList(data.data, true)))
      .catch(err => dispatch(getTagList(null, false)))
  }
}

export function fetchMostCommentPosts() {
  return dispatch => {
    return Axios.get(API+"/posts?orderBy=comment_count&order=DESC&limit=3")
      .then(data => dispatch(getMostCommentPosts(data.data, true)))
      .catch(err => dispatch(getMostCommentPosts(null, false)))
  }
}

export function fetchMostViewPosts() {
  return dispatch => {
    return Axios.get(API+"/posts?orderBy=view&order=DESC&limit=3")
      .then(data => dispatch(getMostViewPosts(data.data, true)))
      .catch(err => dispatch(getMostViewPosts(null, false)))
  }
}

export function fetchPostDetails(post_slug) {
  return dispatch => {
    dispatch(getPostDetails(null, true, false))
    // dispatch(getCommentByPost(null, true, false));

    return Axios.get(API+"/post/" + post_slug)
      .then(data => {
        dispatch(getPostDetails(data.data, false, true))        

        // Fetch comments by post
        // Axios.get(`http://localhost:5003/comment/${post_slug}?limit=3`)
        // .then(data => {
        //   if( !!data.data.err ) dispatch(getCommentByPost(data.data, false, false));
        //   else dispatch(getCommentByPost(data.data, false, true))
        // })
        // .catch(err => dispatch(getCommentByPost(null, false, false)))

      })
      .catch(err => dispatch(getPostDetails(null, false, false)))
  }
}

export function fetchRelatedPosts(tag, postID) {
  return dispatch => {
    dispatch(getRelatedPosts(null, true, false))
    return Axios.get(`${API}/posts?orderBy=date&order=DESC&limit=3&related=${tag}&notin=${postID}`)
      .then(data => dispatch(getRelatedPosts(data.data, false, true)))
      .catch(err => dispatch(getRelatedPosts(null, false, false)))
  }
}

export function fetchCommentByPost(post_slug) {
  return dispatch => {
    dispatch(getCommentByPost(null, true, false));

    return Axios.get(`${API}/comment/${post_slug}?limit=3`)
      .then(data => {
        if( !!data.data.err ) dispatch(getCommentByPost(data.data, false, false));
        else dispatch(getCommentByPost(data.data, false, true))
      })
      .catch(err => dispatch(getCommentByPost(null, false, false)))
  }
}

export function fetchFeaturedPosts() {
  return dispatch => {
    dispatch(getFeaturedPosts(null, true, false))

    return Axios.get(API+"/posts?orderBy=date&order=DESC&limit=10")
      .then(data => dispatch(getFeaturedPosts(data.data, false, true)))
      .catch(err => dispatch(getFeaturedPosts(null, false, false)))
  }
}

export function fetchHomeVideos() {
  return dispatch => {
    return Axios.get(API+"/videos/")
      .then(data => {
        if(!!data.data.err) dispatch( getHomeVideos(null, false) );
        else dispatch( getHomeVideos(data.data.items, true) );
      })
      .catch(err => dispatch( getHomeVideos(null, false) ) )
  }
}

export function fetchHomeArchivePosts() {
  return dispatch => {
    dispatch(getHomeArchivePosts(null, true, false))

    return Axios.get(API+"/posts?orderBy=date&order=DESC&limit=12")
      .then(data => dispatch(getHomeArchivePosts(data.data, false, true)))
      .catch(err => dispatch(getHomeArchivePosts(null, false, false)))
  }
}

export function fetchFooterRecentPosts() {
  return dispatch => {
    dispatch(getFooterRecentPosts(null, false))

    return Axios.get(API+"/posts?orderBy=date&order=DESC&limit=3")
      .then(data => dispatch(getFooterRecentPosts(data.data, true)))
      .catch(err => dispatch(getFooterRecentPosts(null, false)))
  }
}

export function fetchPostsByCategory(category) {
  return dispatch => {
    dispatch(getPostsByCategory(null, true, false))

    return Axios.get(API+"/category/"+category)
      .then(data => dispatch(getPostsByCategory(data.data, false, true)))
      .catch(err => dispatch(getPostsByCategory(null, false, false)))
  }
}

export function actionAddComment(postID, data) {
  return dispatch => {
    dispatch( addComment(null, false) );
    return Axios(`${API}/comment/${postID}`, {
      method: "POST",
      data:  querystring.stringify(data)
    })
    .then( data => {
      const commentHasAdded = data.data.ops[0];
      console.log(data.data)
      dispatch( addComment( commentHasAdded, true ) )
    })
    .catch( err => dispatch( addComment(null, false) ) )
  }
}



// "total": 50,
// "limit": 10,
// "page": 2,
// "totalPages": 5,
// "hasNextPage": true,
// "nextPage": 3,
// "hasPrevPage": true,
// "prevPage": 1,
// "pagingCounter": 11