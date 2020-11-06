import { put, takeLatest, call } from 'redux-saga/effects';
import createToast from '../../factories/createToast';
import { ADD_TOAST } from '../../services/constants/types';
import { 
  GOT_PROFILE, 
  LOGOUT_SUCCESS,  
  IS_LOADING, 
  LOGOUT, 
  GET_PROFILE 
} from '../../services/constants/types';
import { removeUserSession  } from '../../Utils/Common';

import profileApi from '../../api/profileApi';

export function * loading () {
  yield put({ type: IS_LOADING, payload: true });
}

export function * loaded () {
  yield put({ type: IS_LOADING, payload: false });
}

export function * getProfile (action) {
  yield call(loading);
  const resData = yield profileApi.getProfile(action.payload.id);
  console.log('res data: ', resData);

  if(resData.ok){
    yield put({ type: GOT_PROFILE, payload: resData.data.response });
  }else{
    yield call(errorMSG,  resData.message);
  };
  yield call(loaded);
}


export function * logout () {
  removeUserSession();
  yield put({ type: LOGOUT_SUCCESS });
}

export function * successMSG(text) {
  yield put( {
    payload: createToast({ text: text, type: 'success' }),
    type: ADD_TOAST
  });
}

export function * errorMSG(text) {
  yield put({
    payload: createToast({ text: text, type: 'error' }),
    type: ADD_TOAST
  });
}



function * commondWatcher () {
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(GET_PROFILE, getProfile);
}
  
export default commondWatcher;
