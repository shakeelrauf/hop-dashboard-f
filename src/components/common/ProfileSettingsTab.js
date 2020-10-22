import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';

const CustomTabs = withStyles({
  root: {
    width: '100%',
    borderBottom: '1px solid #e4e7eb',
  },
  indicator: {
    backgroundColor: '#ff6f34',
    height: '3px !important'
  },
})(Tabs);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
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
      color: '#3a3b3f',
      opacity: 1,
    },
    '&$selected': {
      color: '#3a3b3f',
      borderColor: '#3a3b3f'
    },
    '&:focus': {
      color: '#3a3b3f',
    },
  },
  selected: {},
}))((props) => {
  return (<Tab disableRipple {...props} />);}
);

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
  darkHeading: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    opacity: '1 !important',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: '-0.05px',
    color: '#3a3b3f'
  },
  tab1: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width: '100%'
    }
  }
}));

export default function CustomizedTabs({tabs}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root }>
      <div className={classes.demo}>
        <CustomTabs value={value} onChange={handleChange} aria-label="ant example" 
          scrollButtons="auto"           
          variant="scrollable"
        >
          {
            tabs.map((ele, index) => {
              return (<CustomTab key={index} label={ele.heading} className={`${classes.darkHeading} tab1`} />);
            })
          }
        </CustomTabs>
        {
          tabs.map((ele, index) => {
            return (
              <TabPanel  value={value} key={index}  index={index}>
                {ele.component}
              </TabPanel>
            );
          })
        }
      </div>
    </div>
  );
}