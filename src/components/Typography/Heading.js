import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h5: {
    'font-size': '24px',
    'font-weight': 600,
    'font-stretch': 'normal',
    'font-style': 'normal',
  }
}));

export default function Heading (props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <Typography 
      align="left"
      variant="h5"
      className={classes.h5}
    >
      {children}
    </Typography>
  );
}

Heading.propTypes = {
  children: PropTypes.node
};
