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
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_TAG,
  GET_RELATED_POSTS,
  ADD_COMMENT,
  LOAD_MORE_COMMENTS,
  RESET_STATE,
  LOADING,
  
} from '../Contants';


const defaultState = {
  loading: {},
  listComments: [],
  listCommentsInfo: {},
}

const blog = (state = defaultState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case PRE_LOADING:
      return{ 
        ...state, 
        preLoading: action.preLoading 
      }

    case GET_CATEGORY_LIST:
      return { 
        ...state, 
        categoryList: action.categoryList, 
        getCategoryListStatus: action.getCategoryListStatus 
      }

    case GET_TAG_LIST:
      return { 
        ...state, 
        tagList: action.tagList, 
        getTagListStatus: action.getTagListStatus 
      }

    case GET_FEATURED_POSTS:
      return { 
        ...state, 
        featuredPosts: action.featuredPosts, 
        fetchingFeaturedPosts: action.fetchingFeaturedPosts, 
        getFeaturedPostsStatus: action.getFeaturedPostsStatus 
      }
    
    case GET_MOST_COMMENT_POSTS:
      return { 
        ...state, 
        mostCommentPosts: action.mostCommentPosts, 
        getMostCommentPostsStatus: action.getMostCommentPostsStatus 
      }

    case GET_MOST_VIEW_POSTS:
      return { 
        ...state, 
        mostViewPosts: action.mostViewPosts, 
        getMostViewPostsStatus: action.getMostViewPostsStatus 
      }
  
    case GET_POST_DETAILS:
      return { 
        ...state, 
        postDetails: action.postDetails, 
        fetchingPostDetails: action.fetchingPostDetails, 
        getPostDetailsStatus: action.getPostDetailsStatus 
      }
    
    case GET_RELATED_POSTS: 
      return {
        ...state,
        relatedPosts: action.relatedPosts,
        fetchingRelatedPosts: action.fetchingRelatedPosts,
        getRelatedPostsStatus: action.getRelatedPostsStatus
      }

    case GET_COMMENT_BY_POST:
      return { 
        ...state, 
        listComments: action.listComments,
        listCommentsInfo: action.listCommentsInfo, 
        fetchingCommentByPost: action.fetchingCommentByPost,
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

    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        categoryPosts: action.categoryPosts,
        fetchingPostsByCategory: action.fetchingPostsByCategory,
        getPostsByCategoryStatus: action.getPostsByCategoryStatus
      }

    case GET_POSTS_BY_TAG:
      return {
        ...state,
        tagPosts: action.tagPosts,
        fetchingPostsByTag: action.fetchingPostsByTag,
        getPostsByTagStatus: action.getPostsByTagStatus
      }
      
    case ADD_COMMENT:
      return {
        ...state,
        addCommentReponse: action.addCommentReponse,
        addCommentStatus: action.addCommentStatus,
      }

    case LOAD_MORE_COMMENTS:
      return {
        ...state,
        listComments: [...state.listComments, ...action.listComments],
        listCommentsInfo: {...state.listCommentsInfo, ...action.listCommentsInfo}, 
        fetchingCommentByPost: action.fetchingCommentByPost,
        getCommentByPostStatus: action.getCommentByPostStatus 
      }
    
    case RESET_STATE:
      return {
        defaultState : {
          listComments: [],
          listCommentsInfo: {}, 
        }
      }

    case LOADING:
      return {
        ...state,
        loadingObject: {...state.loading, ...action.loadingObject},
      }

    default:
      return state;
  }
};
export default blog;