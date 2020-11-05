
import { all } from 'redux-saga/effects';
import dashboardWatcher from './dashboardSagas';
import commonWatcher from './common';
import patientsWatcher from './patientsSagas';

export default function * rootSaga () {
  yield all([
    dashboardWatcher(),
    commonWatcher(),
    patientsWatcher()
  ]);
}
