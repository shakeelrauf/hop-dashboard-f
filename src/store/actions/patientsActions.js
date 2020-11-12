import { 
  GET_PATIENTS_META,
  GET_PATIENT_DATA,
  ADD_NEW_PATIENT,
  UPDATE_PATIENT,
  EMPTY_PATIENT,
  DELETE_PATIENT,CALLBACK_END
} from '../../services/constants/types';

export function getPatientsMeta() {
  return {
    type: GET_PATIENTS_META
  };
}

export function getPatient (id) {
  return {
    type: GET_PATIENT_DATA,
    payload: id
  };
}

export function addNewPatient (body) {
  return {
    type: ADD_NEW_PATIENT,
    payload: body
  };
}

export function updatePatient (id, body) {
  return {
    type: UPDATE_PATIENT,
    payload: {
      id: id,
      body: body
    }
  };
}


export function emptyPatient (id, body) {
  return {
    type: EMPTY_PATIENT
  };
}

export function deletePatient (id,body) {
  return {
    type: DELETE_PATIENT,
    payload: {id: id, body: body}
  };
}

export function callbackEnd () {
  return {
    type: CALLBACK_END,
  };
}