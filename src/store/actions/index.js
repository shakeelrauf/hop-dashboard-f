import { GET_NEWS, ADD_BOOK, GOTOINDEX, LOGIN_USER, IS_LOADING, LOGOUT } from '../../services/constants/types';

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


export const isloading = (value) => {
  return {
    type: IS_LOADING,
    payload: value
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};