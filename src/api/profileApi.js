import apisauce from 'apisauce';
import { getToken } from '../Utils/Common';
export const profileApiCreate = () => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken(),
      'Key': `${process.env.REACT_APP_CLIENT_KEY}`
    },
  });

  const getProfile = (id) =>{
    return  api.get(`v2/person/provider/${id}`);
  };


  const saveProfile = (body) =>{
    return  api.get('v2/person/provider', body);
  };
   
  return {
    getProfile,
    saveProfile
  };
};

export default profileApiCreate();
