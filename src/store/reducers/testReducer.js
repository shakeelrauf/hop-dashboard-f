import { GET_NEWS, NEWS_RECEIVED } from '../../services/constants/types';
export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true, text: 'Hello' };
    case NEWS_RECEIVED:
      return { ...state, news: action.json[0], loading: false, text: 'world' };
    default:
      return state;
  }
};
