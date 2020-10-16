import { AUTH_ERROR, GRANT_ERROR, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS } from '../../services/constants/types';
const initialStates = {user: null}; 
export const authReducer = (state=initialStates, action) => {
  switch (action.type) {
  case AUTH_ERROR:
    return { ...state, error: action.payload };
  case GRANT_ERROR:
    return { ...state, error: action.payload };
  case LOGIN_SUCCESS:
    return { ...state, user: action.payload };
  case LOGOUT:
    return { ...state, user: null }; 
  case LOGOUT_SUCCESS:
    return { ...state, user: null };
  default:
    return state;
  }
};
export default authReducer;