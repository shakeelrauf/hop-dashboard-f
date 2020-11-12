import apisauce from 'apisauce';
import { getAuthHeaders } from '../Utils/Common';

export const api = apisauce.create({
  baseURL: `${process.env.REACT_APP_BASE_URL2}/`,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  responseType: 'json'
});

api.axiosInstance.interceptors.response.use(handleSuccess,handleError);
function handleSuccess(response) {
  return response;
}

function handleError(error) {
  if (error.message === 'Network Error') {
    return Promise.reject(error);
  }
  switch (error.response.status) {
  case 401:
    if(error.response.config.method !== 'delete')
      window.location.href ='/logout';
    break;
  default:
    break;
  }
  return Promise.reject(error);
}

const patientsApiCreate = () => {

  const getPatients = (data) => {
    return api.get(`person/patients?${data}`, {}, { data: null, headers: getAuthHeaders()  });
  };

  const getPatient = (id) => {
    return api.get(`person/patient/${id}`, {} ,{data: null, headers: getAuthHeaders() });
  };

  const getPatientsMeta = () => {
    return api.get('person/meta', {}, { data: null, headers: getAuthHeaders() });
  };

  const addNewPatient = (data = {}) => { 
    return api.post('person/patient', data, {headers: getAuthHeaders() });
  }; 

  const updatePatient = (id,data = {}) => { 
    return api.put(`person/patient/${id}`, data, {headers: getAuthHeaders() });
  }; 


  const deletePatient = (id,data = {}) => { 
    return api.delete(`person/patient/${id}`, data, {data: data,headers: getAuthHeaders() });
  }; 

  return {
    getPatients,
    getPatientsMeta,
    addNewPatient,
    getPatient,
    deletePatient,
    updatePatient
  };
};

export default patientsApiCreate();
