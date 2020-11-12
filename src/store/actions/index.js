import { 
  GET_PROFILE, 
  CHANGE_PASSWORD, 
  RESET_PASSWORD, 
  GET_NEWS, 
  ADD_BOOK, 
  GOTOINDEX, 
  LOGIN_USER, 
  IS_LOADING, 
  LOGOUT,
  SAVE_PROFILE
} from '../../services/constants/types';

import createToast from '../../factories/createToast';
import { ADD_TOAST, REMOVE_TOAST } from '../../services/constants/types';

export const getNews = () => ({
  type: GET_NEWS
});

export const addBook = (name) => {
  return {
    type: ADD_BOOK, 
    payload: name
  };
};

export const goToIndex = () => {
  return {
    type: GOTOINDEX, 
  };
};

export const loginUser = (email, password) => {
  return {
    type: LOGIN_USER,
    payload: {email, password}
  };
};

export const resetPassword = (email) => {
  return {
    type: RESET_PASSWORD,
    payload: {email}
  };
};



export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  };
}


export const isloading = (value) => {
  return {
    type: IS_LOADING,
    payload: value
  };
};

export const changePassword = (email, newPassword, oldPassword) => {
  return {
    type: CHANGE_PASSWORD,
    payload: {email, oldPassword, newPassword}
  };
};


export const getProfile = (id) => {
  return {
    type: GET_PROFILE,
    payload: {id}
  };
};

export const saveProfile = (body) => {
  return {
    type: SAVE_PROFILE,
    payload: body
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export { getPatientsMeta, emptyPatient,getPatient , addNewPatient, updatePatient, deletePatient, callbackEnd} from './patientsActions';