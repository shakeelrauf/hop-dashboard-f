import apisauce from 'apisauce';
import { getUser } from '../Utils/Common';
export const profileApiCreate = () => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BASE_URL2}/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + btoa(getUser().access_token+ ': '),
      'Key': getUser().public_key
    },
  });

  const getProfile = (id) =>{
    return  api.get(`person/provider/${id}`);
  };
  // curl --location --request GET 'https://p-dev.kangaroohealth.com/v2/person/provider/5f882e806eb98a00015807bd' \
  // --header 'Content-Type: application/json' \
  // --header 'Key: faR3XT7hUT4kf1MFnOPG3MQnKIF9AmB3gc7Mrswl' \
  // --header 'Authorization: Bearer ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNlptRnNjMlVzSW1WNGNDSTZNVFl3TmpRd056UTFNU3dpY205c1pTSTZJblZ6WlhJaWZRLmlkUVcyYUh3ekduNzZnT3RCbUU2SWx0QlhiR0JZMFgtRWlsSk5rQ2RPbzQ6IA=='
  

  const saveProfile = (body) =>{
    return  api.get('person/provider', body);
  };
   
  return {
    getProfile,
    saveProfile
  };
};

export default profileApiCreate();
