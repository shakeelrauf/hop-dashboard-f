import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    'font-family': 'Roboto',
    'font-size': '14px',
    'font-weight': 'normal',
    'font-stretch': 'normal',
    'font-style': 'normal',
    'line-height': 1.43,
    'letter-spacing': '-0.05px',
    'color': '#9ea0a5'
  }
}));

export default function SmallText (props) {
  const classes = useStyles();
  const { children, style, className } = props;
  return (
    <Typography 
      align="left"
      variant="body2"
      style={style}
      className={classes.text + ' ' + className}
    >
      {children}
    </Typography>
  );
}

SmallText.propTypes = {
  children: PropTypes.node
};
