import { getUser } from '../Utils/Common';

const headers = {
  'Content-Type': 'application/json',
  'Key': getUser().public_key,
  'Authorization': 'Bearer ' + btoa(getUser().access_token + ': ')
};

const profileApiCreate = () => {
  const get = (url) => {
    return fetch(`${process.env.REACT_APP_BASE_URL2}/${url}`,{
      headers: headers
    });
  };

  const post = (url, body) => {
    return fetch(`${process.env.REACT_APP_BASE_URL2}/${url}`,{
      headers: headers,
      method: 'POST',
      body: JSON.stringify(body)
    });
  };


  const put = (url, body) => {
    return fetch(`${process.env.REACT_APP_BASE_URL2}/${url}`,{
      headers: headers,
      method: 'PUT',
      body: JSON.stringify(body)
    });
  };

  return {
    get,
    post,
    put
  };
};

export const profileApi = () => {
  const api = profileApiCreate();

  const getProfile = (id) =>{
    return api.get(`/person/provider/${id}`);
  };

  const saveProfile = (body) =>{
    return api.put('person/provider', body);
  };
   
  return {
    getProfile,
    saveProfile
  };
};

export default profileApi();
