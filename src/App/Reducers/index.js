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
  GET_FEATURED_POSTS,
  GET_MOST_COMMENT_POSTS,
  GET_MOST_VIEW_POSTS,
  GET_POST_DETAILS,
  GET_COMMENT_BY_POST,
  HOME_GET_VIDEOS,
  HOME_GET_ARCHIVE_POSTS,
  FOOTER_GET_RECENT_POSTS,
  
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

    case GET_FEATURED_POSTS:
      return { 
        ...state, 
        featuredPosts: action.featuredPosts, 
        fetchingFeaturedPosts: action.fetchingFeaturedPosts, 
        getFeaturedPostsStatus: action.getFeaturedPostsStatus 
      }
    
    case GET_MOST_COMMENT_POSTS:
      return { ...state, mostCommentPosts: action.mostCommentPosts, getMostCommentPostsStatus: action.getMostCommentPostsStatus }

    case GET_MOST_VIEW_POSTS:
      return { ...state, mostViewPosts: action.mostViewPosts, getMostViewPostsStatus: action.getMostViewPostsStatus }
  
    case GET_POST_DETAILS:
      return { 
        ...state, 
        postDetails: action.postDetails, 
        fetchingPostDetails: action.fetchingPostDetails, 
        getPostDetailsStatus: action.getPostDetailsStatus 
      }

    case GET_COMMENT_BY_POST:
      return { 
        ...state, 
        commentByPost: action.commentByPost, 
        getCommentByPostStatus: action.getCommentByPostStatus 
      }

    case HOME_GET_VIDEOS:
        return { 
          ...state, 
          homeVideos: action.homeVideos, 
          getHomeVideosStatus: action.getHomeVideosStatus 
        }
        
    case HOME_GET_ARCHIVE_POSTS:
      return {
        ...state,
        homeArchivePosts: action.homeArchivePosts,
        fetchingHomeArchivePosts: action.fetchingHomeArchivePosts,
        getHomeArchivePostsStatus: action.getHomeArchivePostsStatus
      }
    
    case FOOTER_GET_RECENT_POSTS:
      return {
        ...state,
        footerRecentPosts: action.footerRecentPosts,
        getFooterRecentPostsStatus: action.getFooterRecentPostsStatus,
      }
      
    default:
      return state;
  }
};
export default blog;