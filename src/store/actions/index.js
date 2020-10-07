import { GET_NEWS, ADD_BOOK, GOTOINDEX } from '../../services/constants/types';

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