import { CALLBACK_END, CALLBACK_START} from '../../services/constants/types';
const initialStates = {callbackStart: false, state: null}; 
export const callbackReducer = (state=initialStates, action) => {
  switch (action.type) {
  case CALLBACK_END:
    return { ...state, callbackStart: false, state: null };
  case CALLBACK_START:
    return { ...state, callbackStart: true, state: action.payload};
  default:
    return state;
  }
};
export default callbackReducer;