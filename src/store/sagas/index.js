import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED, ADD_BOOK, BOOK_RECEIVED } from '../../services/constants/types';

function * fetchNewsTest () {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());
  yield put({ type: NEWS_RECEIVED, json: json.articles });
}

function * addBook (action) {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());
  yield put({ type: BOOK_RECEIVED, payload: action.payload,  json: json.articles });

}

function * actionWatcher () {
  yield takeLatest(GET_NEWS, fetchNewsTest);
  yield takeLatest(ADD_BOOK, addBook);
}
export default function * rootSaga () {
  yield all([
    actionWatcher()
  ]);
}
