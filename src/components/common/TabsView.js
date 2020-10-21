import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const AntTabs = withStyles({
  root: {
    width: '100%',
    borderBottom: '1px solid #e4e7eb',
  },
  indicator: {
    backgroundColor: '#ff6f34',
    height: '3px !important'
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(3),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#ff6f34',
      opacity: 1,
    },
    '&$selected': {
      color: '#ff6f34',
      borderColor: '#ff6f34'
    },
    '&:focus': {
      color: '#ff6f34',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flex: 1
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo: {
    backgroundColor: 'none',
    color: theme.palette.primary
  },
  demo2: {
    backgroundColor: '#2e1534',
  },

  tabHeading: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.05px',
    color: '#9ea0a5'
  },
  tab1: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width: '100%'
    }
  }
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" 
          scrollButtons="auto"           variant="scrollable"
          centered>
          <AntTab label="OVERVIEW" className={`${classes.tabHeading} tab1`} />
          <AntTab label="MESSAGING" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="CHECKING" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="NOTIFICATIONS" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="CLINICS NOTES" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="PRIORITY" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="LOG TIME" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="VITALS" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="WOUND" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="COMPLIANCE" className={`${classes.tabHeading} tab1`}/>
          <AntTab label="PRO" className={`${classes.tabHeading} tab1`}/>
        </AntTabs>
      </div>
    </div>
  );
}