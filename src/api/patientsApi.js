import apisauce from 'apisauce';

import { getAuthHeaders } from '../Utils/Common';

const patientsApiCreate = () => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BASE_URL2}/`,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    responseType: 'json'
  });

  const getPatients = (data) => {
    return api.get(`person/patients?${data}`, {}, { data: null, headers: getAuthHeaders() });
  };

  const getPatientsMeta = () => {
    return api.get('person/meta', {}, { data: null, headers: getAuthHeaders() });
  };

  return {
    getPatients,
    getPatientsMeta
  };
};

export default patientsApiCreate();
