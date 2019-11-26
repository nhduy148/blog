// import { combineReducers } from 'redux';
// import blog from './blog.reducer'

// const reducer = combineReducers({
//   blog,
// })
// export default reducer

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


const defaultState = {
  loading: false,
}

const blog = (state = defaultState, action) => {

  switch (action.type) {
    case PRE_LOADING:
      return{ ...state, preLoading: action.preLoading }

    case GET_CATEGORY_LIST:
      return { ...state, categoryList: action.categoryList, getCategoryListStatus: action.getCategoryListStatus }

    case GET_TAG_LIST:
      return { ...state, tagList: action.tagList, getTagListStatus: action.getTagListStatus }

    case GET_LATEST_POSTS:
      return { ...state, latestPosts: action.latestPosts, getLatestPostsStatus: action.getLatestPostsStatus }
    
    case GET_MOST_COMMENT_POSTS:
      return { ...state, mostCommentPosts: action.mostCommentPosts, getMostCommentPostsStatus: action.getMostCommentPostsStatus }

    case GET_TRENDING_POSTS:
      return { ...state, trendingPosts: action.trendingPosts, getTrendingPostsStatus: action.getTrendingPostsStatus }

    case GET_HOME_VIDEOS:
      return { ...state, homeVideos: action.homeVideos, getHomeVideosStatus: action.getHomeVideosStatus }
      
    case GET_POST_DETAILS:
      return { ...state, postDetails: action.postDetails, getPostDetailsStatus: action.getPostDetailsStatus }

    case GET_COMMENT_BY_POST:
      return { ...state, commentByPost: action.commentByPost, getCommentByPostStatus: action.getCommentByPostStatus }


      
    default:
      return state;
  }
};
export default blog;