export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  return sessionStorage.getItem('token') || null;
};

export const getAuthHeaders = () => {
  const user = getUser();

  return {
    'Key': user ? user.public_key : '',
    'Authorization': 'Bearer ' + btoa((user ? user.access_token: '') + ': ')
  };
};

export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
};

export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
};