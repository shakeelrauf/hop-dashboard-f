import apisauce from 'apisauce';

import { getAuthHeaders } from '../Utils/Common';

const profileApiCreate = () => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BASE_URL2}/`,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    responseType: 'json'
  });

  const getProfile = (id) => {
    return api.get(`person/provider/${id}`, {}, { data: null, headers: getAuthHeaders() });
  };

  const saveProfile = (body) =>{
    return api.get('person/provider', body, { headers: getAuthHeaders() });
  };

  return {
    getProfile,
    saveProfile,
  };

};

export default profileApiCreate();
