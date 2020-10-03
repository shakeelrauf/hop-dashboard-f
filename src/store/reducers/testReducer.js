import { GET_NEWS, NEWS_RECEIVED, ADD_BOOK, BOOK_RECEIVED } from '../../services/constants/types';
const initialStates = {books: []}; 
export const testReducer = (state=initialStates, action) => {
  debugger;
  switch (action.type) {
  case GET_NEWS:
    return { ...state, loading: true, text: 'Hello' };
  case NEWS_RECEIVED:
    return { ...state, news: action.json[0], loading: false, text: 'world' };
  case ADD_BOOK:
    return { ...state, loading: true };
  case BOOK_RECEIVED:
    return { ...state, books: [action.payload, ...state.books], loading: false };
  default:
    return state;
  }
};
