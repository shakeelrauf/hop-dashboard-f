import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: '30%',
      flexShrink: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('xs')]: {
      width: '70%',
      flexShrink: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '22%',
      flexShrink: 0,
    },
    overflowX: 'hidden'
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  alignCenter: {
    alignItems: 'center'
  },
  dFlex: {
    display: 'flex'
  },
  center: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  supportText: {
    fontSize: '13px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: 'rgba(0, 0, 0, 0.33)',
    marginTop: '24px',
    marginLeft: '30px'
  },
  appBar: {
    zIndex: 99999,
    boxShadow: '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)',
    backgroundColor: '#ffffff'
  },
  adornedStart: {
    paddingLeft: '13px',
    borderColor: '#e4e7eb'
  },
  input: {
    padding: '8.5px 14px'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    marginTop: '80px'
  },
  clientName: {
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.17,
    letterSpacing: '-0.06px',
    color: '#1e2633',
  },
  mL30: {
    marginLeft: '30px !important'
  },
  centerFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  justifyEnd:{
    justifyContent: 'flex-end'
  },
  largeAvatar: {
    marginBottom: theme.spacing(2),
    width: theme.spacing(12.5),
    height: theme.spacing(12.5),
  },
  name: {
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25',
    letterSpacing: '-0.05px',
    textAlign: 'center',
    color: '#3a3b3f'
  },
  sideItem: {
    color: '#66788a'
  },
  info: {
    width: '100%'
  }
}));

export default useStyles;