import { GET_NEWS, ADD_BOOK } from '../../services/constants/types';

export const getNews = () => ({
  type: GET_NEWS
});

export const addBook = (name) => {
  debugger;
  return {
    type: ADD_BOOK, 
    payload: name
  };
};