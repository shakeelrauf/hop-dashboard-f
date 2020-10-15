import apisauce from 'apisauce';
import { getToken } from '../Utils/Common';

export const authApiCreate = () => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_CLIENT_KEY}:${process.env.REACT_APP_CLIENT_SECRET}`),
    },
  });

  const createToken = () => {
    return api.post('token/grant');
  };

  const userSignIn = (username, password) =>{
    createToken().then(res => {
      if(res.data){
        api.post(
          res.data.response.url,
          {},{
            auth: {
              username,
              password
            },
            headers: {
              Grant: res.data.response.grant,
            }
          }
        ).then(res=>{
        });
      }
    });
  };

   
  return {
    userSignIn,
  };
};

export default authApiCreate();
