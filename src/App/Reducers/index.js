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


      
    default:
      return state;
  }
};
export default blog;