import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  closeButton: {
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children,variant, classes, onClose, style, titleStyle, ...other } = props;
  return (
    <MuiDialogTitle  disableTypography className={classes.root} {...other} style={{...style}}>
      <Typography variant={variant} style={{...titleStyle}}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Modal({handleClose, open, variant='h6', children, titleStyle={}, title, close=true, actions,headerStyle={}, containerStyle={} }) {
  return (
    <div>
      <Dialog maxWidth='xl' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  variant={variant} onClose={handleClose} titleStyle={{...titleStyle}} style={{...headerStyle}}>
          {title}
        </DialogTitle>
        <Divider/>
        <DialogContent  style={{...containerStyle}}>
          {children}
        </DialogContent>
        {
          close || actions ? 
            <DialogActions style={{padding: '30px'}}>
              {close ?  
                <Button autoFocus variant={'contained'} onClick={handleClose} color="primary">
                  Close
                </Button> 
                : 
                null
              }
              { actions ? actions.render : null}
            </DialogActions>
            : null
        }
      </Dialog>
    </div>
  );
}