import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardRoot: {
    display: 'flex',
    width: '100%',
    background: 'white',
    'box-shadow': '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)'
  },
  link: {
    fontWeight: 600,
    color: '#9ea0a5',
    marginLeft: '3px'
  },
  textAlignCenter: {
    'text-align': 'center'
  },
  logo: {
    width: '280px',
    height: '62px',
    'object-fit': 'contain'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  details: {
    display: 'flex',
    width: '100%',
    height:  '100%',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    height: '100%',
    width:  '100%',
  },
  fullWidth: {
    width: '100%'
  }
}));