import apisauce from 'apisauce';
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

  const resetPassword = (email) => {
    return api.post('password/reset',{email});
  };

  const changePassword = (email, oldPassword, newPassword) => {
    return api.post('password/change',{
      'oldpassword': oldPassword,
      'newpassword': newPassword
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${email}:${oldPassword}`),
      },
    }); 
  };

   
  return {
    userSignIn,
    createToken,
    resetPassword,
    changePassword
  };
};

export default authApiCreate();
