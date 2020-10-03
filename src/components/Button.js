import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../store/actions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

let CustomButton = ({ text, getNews }) => (
  <Button variant="contained" color="primary" onClick={getNews}>
    {text || 'Hello'}
  </Button>
);
const mapDispatchToProps = {
  getNews: getNews
};

CustomButton.propTypes = {
  text: PropTypes.string,
  getNews: PropTypes.func
};
const mapStateToProps = (state) => ({ text: state.test.text });

CustomButton = connect(mapStateToProps, mapDispatchToProps)(CustomButton);
export default CustomButton;
