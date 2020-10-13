import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  kangoroPrimary: {
    'font-family': 'Roboto',
    'font-size': '14px',
    'font-weight': 600,
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': 1.14,
    'letter-spacing': '1.25px',
    'color': '#ff6f34',
  }
}));

export default function Primary (props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <Typography 
      align="left"
      variant="body1"
      className={classes.kangoroPrimary}
    >
      {children}
    </Typography>
  );
}

Primary.propTypes = {
  children: PropTypes.node
};
