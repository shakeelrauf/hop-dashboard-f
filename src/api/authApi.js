import apisauce from 'apisauce';
import queryString from  'query-string';
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

  const userSignIn = (url, grant, username, password) =>{
    let urlsearch = new URL(url);
    urlsearch = urlsearch.search;
    return api.post(
      'user/signin' + urlsearch,
      {},{
        auth: {
          username,
          password
        },
        headers: {
          Grant: grant,
        }
      }
    );
  };

   
  return {
    userSignIn,
    createToken
  };
};

export default authApiCreate();
