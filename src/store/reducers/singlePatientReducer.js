import { GOT_PATIENT_DATA, EMPTY_PATIENT } from '../../services/constants/types';
const initialStates = {patient: null}; 

export const singlePatientReducer = (state=initialStates, action) => {
  switch (action.type) {
  case GOT_PATIENT_DATA:
    return { ...state, patient: action.payload };
  case EMPTY_PATIENT:
    return {...state , patient: null};
  default:
    return state;
  }
};
export default singlePatientReducer;