import {
  REDUCER
} from '../Contants';


const defaultState = []

const xxx = (state = defaultState, action) => {
  switch (action.type) {

    case REDUCER:
      return { ...state, popupName: action.popupName }

    default:
      return state;
  }
};
export default xxx;