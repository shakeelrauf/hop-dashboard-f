import { put, takeLatest, all } from 'redux-saga/effects';
import { RESET_PASSWORD, CHANGE_PASSWORD,  LOGOUT_SUCCESS,  LOGOUT, IS_LOADING, GET_NEWS, NEWS_RECEIVED, ADD_BOOK, BOOK_RECEIVED, LOGIN_USER, LOGIN_SUCCESS } from '../../services/constants/types';
import authApi from '../../api/authApi';
import { setUserSession, removeUserSession  } from '../../Utils/Common';

import createToast from '../../factories/createToast';
import { ADD_TOAST } from '../../services/constants/types';

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
      setUserSession(resData.response.access_token, resData.response);
      yield put({ type: LOGIN_SUCCESS, payload: resData.response });
    }else{
      yield put({
        payload: createToast({ text: resData.message, type: 'error' }),
        type: ADD_TOAST
      });
    }
    yield put({ type: IS_LOADING, payload: false });
  }else{
    yield put({ type: IS_LOADING, payload: false });

    yield put({
      payload: createToast({ text: tokenData.message, type: 'error' }),
      type: ADD_TOAST
    });
  }
}


function * resetPassword (action) {
  yield put({ type: IS_LOADING, payload: true });
  const resData = yield authApi.resetPassword(action.payload.email).then(res => res.data);
  if(resData.code === 200){
    yield put( {
      payload: createToast({ text: 'Successful', type: 'success' }),
      type: ADD_TOAST
    });
  }else{
    yield put({
      payload: createToast({ text: resData.message, type: 'error' }),
      type: ADD_TOAST
    });
  }
  yield put({ type: IS_LOADING, payload: false });
}

function * changePassword (action) {
  yield put({ type: IS_LOADING, payload: true });
  const resData = yield authApi.changePassword(action.payload.email, action.payload.oldPassword, action.payload.newPassword).then(res => res.data);
  if(resData.code === 200){
    yield put( {
      payload: createToast({ text: 'Successful', type: 'success' }),
      type: ADD_TOAST
    });
  }else{
    yield put({
      payload: createToast({ text: resData.message, type: 'error' }),
      type: ADD_TOAST
    });
  }
  yield put({ type: IS_LOADING, payload: false });
}


function * logout () {
  removeUserSession();
  yield put({ type: LOGOUT_SUCCESS });
}

function * actionWatcher () {
  yield takeLatest(GET_NEWS, fetchNewsTest);
  yield takeLatest(ADD_BOOK, addBook);
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export default function * rootSaga () {
  yield all([
    actionWatcher()
  ]);
}
