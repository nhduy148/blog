import {
  GET_CATEGORY_LIST,
  GET_TAG_LIST
} from '../Contants';


const defaultState = {
  loading: false,
}

const blog = (state = defaultState, action) => {

  switch (action.type) {

    case GET_CATEGORY_LIST:
      return { ...state, categoryList: action.categoryList, getCategoryListStatus: action.getCategoryListStatus }

    case GET_TAG_LIST:
      return { ...state, tagList: action.tagList, getTagListStatus: action.getTagListStatus }

    default:
      return state;
  }
};
export default blog;