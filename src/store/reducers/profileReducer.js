import { GOT_PROFILE } from '../../services/constants/types';
const initialStates = {profile: {}}; 

export const profileReducer = (state=initialStates, action) => {
  switch (action.type) {
  case GOT_PROFILE:
    return { ...state, profile: action.payload };
  default:
    return state;
  }
};
export default profileReducer;