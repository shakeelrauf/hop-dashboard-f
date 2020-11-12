import { put, takeLatest, call } from 'redux-saga/effects';
import { 
  GOT_PATIENTS_META,
  GET_PATIENTS_META,
  GOT_PATIENT_DATA,
  GET_PATIENT_DATA,
  ADD_NEW_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
  CALLBACK_START
} from '../../services/constants/types';
import patientsApi from '../../api/patientsApi';
import {loading, errorMSG, loaded, successMSG} from './common';

function * getPatientMetaData (action) {
  yield call(loading);
  const resData = yield patientsApi.getPatientsMeta();
  debugger
  if(resData.ok){
    yield put({ type: GOT_PATIENTS_META, payload: resData.data.response });
  }else{
    yield call(errorMSG,  resData.error);
  };
  yield call(loaded);
}

function * getPatient(action) {
  yield call(loading);
  const resData = yield patientsApi.getPatient(action.payload);
  if(resData.ok){
    yield put({ type: GOT_PATIENT_DATA, payload: resData.data.response });
  }else{
    yield call(errorMSG,  resData.error);
  };
}

function * addNewPatient(action) {
  yield call(loading);
  const resData = yield patientsApi.addNewPatient(action.payload);
  if(resData.ok){
    if(resData.data.error){
      yield call(errorMSG,  resData.data.message);
    }else{
      yield call(successMSG,  'Patient Added Successfully');
      yield put({ type: CALLBACK_START, payload: 'addPatient' });
    }
  }else{
    yield call(errorMSG,  resData.error);
  };
}

function * updatePatient(action) {
  yield call(loading);
  const resData = yield patientsApi.updatePatient(action.payload.id, action.payload.body);
  if(resData.ok){
    if(resData.data.error){
      yield call(errorMSG,  resData.data.message);
    }else{
      yield call(successMSG,  'Patient Updated Successfully');
      yield put({ type: CALLBACK_START, payload: 'updatePatient' });
    }
  }else{
    yield call(errorMSG,  resData.error);
  };
}

function * deletePatient(action){
  yield call(loading);
  const resData = yield patientsApi.deletePatient(action.payload.id, action.payload.body);
  if(resData.ok){
    if(resData.data.error){
      yield call(errorMSG,  resData.data.message);
    }else{
      yield call(successMSG,  'Patient Deleted Successfully');
      yield put({ type: CALLBACK_START, payload: 'delete' });
    }
  }else{
    yield call(errorMSG,  'Incorrect password');
  };
}

function * patientsWatcher () {
  yield takeLatest(GET_PATIENTS_META, getPatientMetaData);
  yield takeLatest(GET_PATIENT_DATA, getPatient);
  yield takeLatest(ADD_NEW_PATIENT, addNewPatient);
  yield takeLatest(UPDATE_PATIENT, updatePatient);
  yield takeLatest(DELETE_PATIENT, deletePatient);
}

export default patientsWatcher;