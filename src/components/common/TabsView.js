import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Grid } from '@material-ui/core';

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
  tab1: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      width: '100%'
    }
  }
}));

export default function CustomizedTabs({tabs, addBtn=null}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(addBtn);
  return (
    <div className={classes.root }>
      <div className={classes.demo}>
        <Grid container style={{padding: '0px 12px'}}>
          <Grid 
            item
            container
            xs={addBtn ? 12 : 12}
            sm={addBtn ? 8 : 12}
            md={addBtn ? 9 : 12}
            lg={addBtn ? 10 : 12}
          >
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example" 
              scrollButtons="auto"   
              variant="scrollable"
            >
              {
                tabs.map((ele, index) => {
                  return (<CustomTab key={index} label={ele.heading} className={`${ classes.tabHeading} tab1`} />);
                })
              }
            </CustomTabs>
          </Grid>
          <Grid item 
            container
            alignItems={'flex-end'}
            xs={addBtn ? 12 : false}
            sm={addBtn ? 4 : false}
            md={addBtn ? 3 : false}
            lg={addBtn ? 2 : false}
          >
            {addBtn}
          </Grid>
        </Grid>
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