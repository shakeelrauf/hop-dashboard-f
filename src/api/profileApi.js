import { getUser } from '../Utils/Common';
const profileApiCreate = () => {
  const user = getUser();

  const headers = {
    'Content-Type': 'application/json',
    'Key': user ? user.public_key : '',
    'Authorization': 'Bearer ' + btoa((user ? user.access_token: '') + ': ')
  };
  
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

  const getProfile = (id) =>{
    return profileApiCreate().get(`/person/provider/${id}`);
  };

  const saveProfile = (body) =>{
    return profileApiCreate().put('person/provider', body);
  };
   
  return {
    getProfile,
    saveProfile
  };
};

export default profileApi();
