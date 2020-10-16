import { IS_LOADING } from '../../services/constants/types';
const initialStates = {loading: false}; 

export const loadingReducer = (state=initialStates, action) => {
  switch (action.type) {
  case IS_LOADING:
    return { ...state, loading: action.payload };
  default:
    return state;
  }
};
export default loadingReducer;