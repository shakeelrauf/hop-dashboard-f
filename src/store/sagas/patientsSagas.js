import { put, takeLatest, call } from 'redux-saga/effects';
import { 
  GOT_PATIENTS_META,
  GET_PATIENTS_META
} from '../../services/constants/types';
import patientsApi from '../../api/patientsApi';
import {loading, errorMSG, loaded} from './common';

function * getPatientMetaData (action) {
  yield call(loading);
  const resData = yield patientsApi.getPatientsMeta();
  if(resData.ok){
    yield put({ type: GOT_PATIENTS_META, payload: resData.data.response });
  }else{
    yield call(errorMSG,  resData.message);
  };
  yield call(loaded);
}

function * patientsWatcher () {
  yield takeLatest(GET_PATIENTS_META, getPatientMetaData);
}

export default patientsWatcher;