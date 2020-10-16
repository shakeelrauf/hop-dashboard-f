import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 99999,
    boxShadow: '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)',
    backgroundColor: '#ffffff'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: '64px'
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px'
  
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
    padding: theme.spacing(3),
    marginTop: '64px'
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