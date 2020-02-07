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
  GET_POSTS_BY_TAG,
  GET_RELATED_POSTS,
  ADD_COMMENT,
  LOAD_MORE_COMMENTS,
  // RESET_STATE,
  // LOADING,
  SIGN_IN,
  SIGN_UP,
  AUTHENTICATION

}
from '../Contants';

import Axios from 'axios';
const querystring = require('querystring');

const API_URL = "http://localhost:5003"

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

export const getCommentByPost = (listComments, listCommentsInfo, fetchingCommentByPost, getCommentByPostStatus) => ({
  type: GET_COMMENT_BY_POST,
  listComments,
  listCommentsInfo,
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

export const getPostsByTag = (tagPosts, fetchingPostsByTag, getPostsByTagStatus) => ({
  type: GET_POSTS_BY_TAG,
  tagPosts,
  fetchingPostsByTag,
  getPostsByTagStatus
})

export const addComment = (addCommentReponse, addCommentStatus) => ({
  type: ADD_COMMENT,
  addCommentReponse,
  addCommentStatus,
})

// export const resetState = () => ({
//   type: RESET_STATE,
// })

// export const setLoading = (loadingObject) => ({
//   type: LOADING,
//   loadingObject
// })

// export function actionResetState() {
//   return dispatch => {
//     dispatch(resetState());
//   }
// }

export const getMoreComments = (listComments, listCommentsInfo, fetchingCommentByPost, getCommentByPostStatus) => ({
  type: LOAD_MORE_COMMENTS,
  listComments,
  listCommentsInfo,
  fetchingCommentByPost,
  getCommentByPostStatus
})

export const signin = (signinStatus, signinStatusText, token) => ({
  type: SIGN_IN,
  signinStatus,
  signinStatusText,
  token
})

export const signup = ( signupStatus, signupStatusText ) => ({
  type: SIGN_UP,
  signupStatus,
  signupStatusText,
})

export const authen = ( isLogged, currentUser ) => ({
  type: AUTHENTICATION,
  isLogged,
  currentUser
})

// ********************************************************************************************************************************** //

export function fetchCategoryList() {
  return dispatch => {
    return Axios.get(API_URL+"/categories")
      .then(data => dispatch(getCategoryList(data.data, true)))
      .catch(err => dispatch(getCategoryList(null, false)))
  }
}

export function fetchTagList() {
  return dispatch => {

    return Axios.get(API_URL+"/tags")
      .then(data => dispatch(getTagList(data.data, true)))
      .catch(err => dispatch(getTagList(null, false)))
  }
}

export function fetchMostCommentPosts() {
  return dispatch => {
    return Axios.get(API_URL+"/posts?orderBy=comment_count&order=DESC&limit=3")
      .then(data => dispatch(getMostCommentPosts(data.data, true)))
      .catch(err => dispatch(getMostCommentPosts(null, false)))
  }
}

export function fetchMostViewPosts() {
  return dispatch => {
    return Axios.get(API_URL+"/posts?orderBy=view&order=DESC&limit=3")
      .then(data => dispatch(getMostViewPosts(data.data, true)))
      .catch(err => dispatch(getMostViewPosts(null, false)))
  }
}

export function fetchPostDetails(post_slug) {
  return dispatch => {
    dispatch(getPostDetails(null, true, false))
    // dispatch(getCommentByPost(null, true, false));

    return Axios.get(API_URL+"/post/" + post_slug)
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
    return Axios.get(`${API_URL}/posts?orderBy=date&order=DESC&limit=3&related=${tag}&notin=${postID}`)
      .then(data => dispatch(getRelatedPosts(data.data, false, true)))
      .catch(err => dispatch(getRelatedPosts(null, false, false)))
  }
}

export function fetchCommentByPost(post_slug) {
  return dispatch => {
    dispatch(getCommentByPost([], {}, true, false))

    return Axios.get(`${API_URL}/v2/comments/${post_slug}?limit=3`)
      .then(data => {
        const rawData = data.data.result;
        const list = rawData.list
        const info = Object.keys(rawData).reduce( 
          (obj, key) => { 
            if(key !== "list") obj[key] = rawData[key];
            return obj 
          }, {} )
          
        dispatch(getCommentByPost( list, info, false, data.data.status))
      })
      .catch(err => dispatch(getCommentByPost(null, null, false, false)))
  }
}

export function loadMoreComments(post_slug, next) {
  const loadmore = !!next ? true : false;
  return dispatch => {
    dispatch(getMoreComments([], {}, true, loadmore))

    return Axios.get(`${API_URL}/v2/comments/${post_slug}?limit=3${!!next ? `&page=${next}` : ''}`)
      .then(data => {
        const rawData = data.data.result;
        const list = rawData.list
        const info = Object.keys(rawData).reduce( 
          (obj, key) => { 
            if(key !== "list") obj[key] = rawData[key];
            return obj 
          }, {} )
          
        dispatch(getMoreComments( list, info, false, data.data.status))
      })
      .catch(err => dispatch(getMoreComments(null, null, false, false)))
  }
}

export function fetchFeaturedPosts() {
  return dispatch => {
    dispatch(getFeaturedPosts(null, true, false))

    return Axios.get(API_URL+"/posts?orderBy=date&order=DESC&limit=10")
      .then(data => dispatch(getFeaturedPosts(data.data, false, true)))
      .catch(err => dispatch(getFeaturedPosts(null, false, false)))
  }
}

export function fetchHomeVideos() {
  return dispatch => {
    return Axios.get(API_URL+"/videos/")
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

    return Axios.get(API_URL+"/posts?orderBy=date&order=DESC&limit=12")
      .then(data => dispatch(getHomeArchivePosts(data.data, false, true)))
      .catch(err => dispatch(getHomeArchivePosts(null, false, false)))
  }
}

export function fetchFooterRecentPosts() {
  return dispatch => {
    dispatch(getFooterRecentPosts(null, false))

    return Axios.get(API_URL+"/posts?orderBy=date&order=DESC&limit=3")
      .then(data => dispatch(getFooterRecentPosts(data.data, true)))
      .catch(err => dispatch(getFooterRecentPosts(null, false)))
  }
}

export function fetchPostsByCategory(category) {
  return dispatch => {
    dispatch(getPostsByCategory(null, true, false))

    return Axios.get(API_URL+"/category/"+category)
      .then(data => dispatch(getPostsByCategory(data.data, false, true)))
      .catch(err => dispatch(getPostsByCategory(null, false, false)))
  }
}

export function fetchPostsByTag(tag) {
  return dispatch => {
    dispatch(getPostsByTag(null, true, false))

    return Axios.get(API_URL+"/tag/"+tag)
      .then(data => { /*console.log(data);*/ dispatch(getPostsByTag(data.data, false, true)) })
      .catch(err => dispatch(getPostsByTag(null, false, false)))
  }
}

export function actionAddComment(data) {
  return dispatch => {
    // dispatch( addComment(null, false) );

    return Axios(`${API_URL}/comment/`, {
      method: "POST",
      data:  querystring.stringify(data)
    })
    .then( data => {
      const commentAdded = data.data.commentAdded;
      const status = data.data.status;
      const statusText = data.data.statusText;
      dispatch( addComment( status, statusText ) )

      setTimeout(() => {
        dispatch( addComment(null, false) );
        dispatch(getMoreComments( [], {}, true, true))
        dispatch( getMoreComments( commentAdded, {}, false, true) )
      }, 500)
    })
    .catch( err => {
      dispatch( addComment(false, "Something went wrong! Please try later." ) ) 

      setTimeout(() => {
        dispatch( addComment(null, false) );
        dispatch(getMoreComments( [], {}, true, true))
        dispatch( getMoreComments( [], {}, false, true) )
      }, 500)
    })
  }
}

export function actionSignIn(data) {
  return dispatch => {
    return Axios(API_URL+"/login", {
      method: "POST",
      data: querystring.stringify(data),
      credentials: "include",
      withCredentials: true
    })
    .then( data => {
      dispatch(signin(data.data.status, data.data.result, data.data.token))
    })
    .catch( err => dispatch(signin(false, null, null)) )
  }
}

export function actionSignUp(data) {
  return dispatch => {
    return Axios(API_URL+"/register", {
      method: "POST",
      data: querystring.stringify(data)
    })
    .then( data => dispatch(signup(data.data.status, data.data.result)) )
    .catch( err => dispatch(signup(false, null)) )
  }
}

export function actionAuthen() {
  return dispatch => {
    return Axios(API_URL+"/auth", {
      mode: "GET",
      credentials: "include",
      withCredentials: true
    })
    .then( data => dispatch( authen(data.data.status, data.data.result) ) )
    .catch( err => dispatch( authen(false, undefined) ) )
  }
}