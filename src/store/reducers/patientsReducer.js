import { GOT_PATIENTS_META } from '../../services/constants/types';
const initialStates = {meta: null}; 
export const patientsReducer = (state=initialStates, action) => {
  switch (action.type) {
  case GOT_PATIENTS_META:
    return { ...state, meta: action.payload };
  default:
    return state;
  }
};
export default patientsReducer;