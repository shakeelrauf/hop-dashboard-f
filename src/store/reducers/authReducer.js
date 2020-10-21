import { AUTH_ERROR, RESET_ERROR, GRANT_ERROR, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, RESET_PASSWORD, SUCCESS_MESSAGE } from '../../services/constants/types';
const initialStates = {user: null}; 
export const authReducer = (state=initialStates, action) => {
  switch (action.type) {
  case AUTH_ERROR:
    return { ...state, error: action.payload };
  case RESET_ERROR:
    return { ...state, resetError: action.payload };
  case GRANT_ERROR:
    return { ...state, error: action.payload };
  case LOGIN_SUCCESS:
    return { ...state, user: action.payload };
  case LOGOUT:
    return { ...state, user: null }; 
  case LOGOUT_SUCCESS:
    return { ...state, user: null };
  case RESET_PASSWORD:
    return { ...state, email: action.payload };
  case SUCCESS_MESSAGE:
    return { ...state, resetSuccess: action.payload };
  default:
    return state;
  }
};
export default authReducer;