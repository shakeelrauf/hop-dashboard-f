import { put, takeLatest, call } from 'redux-saga/effects';
import { 
  RESET_PASSWORD, 
  CHANGE_PASSWORD,  
  LOGOUT, 
  IS_LOADING, 
  GET_NEWS, 
  NEWS_RECEIVED, 
  ADD_BOOK, 
  SAVE_PROFILE,
  BOOK_RECEIVED, 
  LOGIN_USER, 
  LOGIN_SUCCESS, 
  GET_PROFILE 
} from '../../services/constants/types';
import { loaded, loading, logout, errorMSG, successMSG, getProfile } from './common';
import authApi from '../../api/authApi';
import profileApi from '../../api/profileApi';
import { setUserSession } from '../../Utils/Common';


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
  yield call(loading);
  const tokenData = yield authApi.createToken().then(token => token.data);
  if(tokenData.response){
    const resData = yield authApi.userSignIn(tokenData.response.url, tokenData.response.grant,action.payload.email, action.payload.password).then(res => res.data);
    if(resData.response){
      setUserSession(resData.response.access_token, resData.response);
      yield put({ type: LOGIN_SUCCESS, payload: resData.response });
    }else{
      yield call(errorMSG,  tokenData.message);
    }
    yield call(loaded);
  }else{
    yield call(loaded);
    yield put({ type: IS_LOADING, payload: false });
    yield call(errorMSG,  tokenData.message);

  }
}


function * resetPassword (action) {
  yield call(loading);
  const resData = yield authApi.resetPassword(action.payload.email).then(res => res.data);
  if(resData.code === 200){
    yield call(successMSG,  'Success');
  }else{
    yield call(errorMSG,  resData.message);
  }
  yield call(loaded);
}

function * changePassword (action) {
  yield call(loading);
  const resData = yield authApi.changePassword(action.payload.email, action.payload.oldPassword, action.payload.newPassword).then(res => res.data);
  if(resData.code === 200){
    yield call(successMSG,  'Success');
  }else{
    yield call(errorMSG,  resData.message);
  }
  yield call(loaded);
}

function * saveProfile (action) {
  yield call(loading);
  const resData = yield profileApi.saveProfile(action.payload);

  if(resData.ok){
    yield call(getProfile, action);
    yield call(successMSG, 'Successfully updated profile');
    yield call(loaded);
  }else{
    yield call(errorMSG,  resData.message);
    yield call(loaded);
  }
}

function * dashboardWatcher () {
  yield takeLatest(GET_NEWS, fetchNewsTest);
  yield takeLatest(ADD_BOOK, addBook);
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(RESET_PASSWORD, resetPassword);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
  yield takeLatest(GET_PROFILE, getProfile);
  yield takeLatest(SAVE_PROFILE, saveProfile);
}

export default dashboardWatcher;