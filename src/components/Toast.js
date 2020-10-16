import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
function Toast({message, open, type}) {
  const [openState, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=> {
    setOpen(open);
  },[open]);

  return (
    <Snackbar
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top' , horizontal: 'right' }}
      open={openState} autoHideDuration={6000} >
      <Alert  severity={type}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;