import React, { useEffect } from 'react';
import { removeUserSession } from '../../../Utils/Common';
import { useHistory } from 'react-router-dom';

function Logout(){
  const history = useHistory();
  useEffect(() => {
    removeUserSession();
    history.push(['/login']);
  });

  return(
    <>
    </>
  );
};

export default Logout;
