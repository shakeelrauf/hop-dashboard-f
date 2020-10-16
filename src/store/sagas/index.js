import { put, takeLatest, all } from 'redux-saga/effects';
import { LOGOUT_SUCCESS, LOGOUT, IS_LOADING, GET_NEWS, NEWS_RECEIVED, ADD_BOOK, BOOK_RECEIVED, LOGIN_USER, AUTH_ERROR, GRANT_ERROR, LOGIN_SUCCESS } from '../../services/constants/types';
import authApi from '../../api/authApi';
import { setUserSession, removeUserSession  } from '../../Utils/Common';

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

function * loginUser (action) {
  yield put({ type: IS_LOADING, payload: true });
  const tokenData = yield authApi.createToken().then(token => token.data);
  if(tokenData.response){
    const resData = yield authApi.userSignIn(tokenData.response.url, tokenData.response.grant,action.payload.email, action.payload.password).then(res => res.data);
    if(resData.response){
      setUserSession(resData.token, resData.response);
      yield put({ type: LOGIN_SUCCESS, payload: resData.response });
    }
    yield put({ type: AUTH_ERROR, payload: resData });
    yield put({ type: IS_LOADING, payload: false });
  }else{
    yield put({ type: IS_LOADING, payload: false });
    yield put({ type: GRANT_ERROR, payload: tokenData});
  }
}

function * logout () {
  removeUserSession();
  yield put({ type: LOGOUT_SUCCESS });
}

function * actionWatcher () {
  yield takeLatest(GET_NEWS, fetchNewsTest);
  yield takeLatest(ADD_BOOK, addBook);
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(LOGOUT, logout);
}

export default function * rootSaga () {
  yield all([
    actionWatcher()
  ]);
}
