


import React from 'react';
import {
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let PrimaryButton = ({variant='contained', type='submit', onClick, children, loading})  => {
  return(
    <Button
      variant={variant}
      color="primary"
      type={type}
      onClick={onClick}
      className="button-block"
    >
      {
        loading === true ? 'Loading' : children
      }
    </Button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  getNews: PropTypes.func
};
const mapStateToProps = (state) => ({ loading: state.test.loading });
  
PrimaryButton = connect(mapStateToProps)(PrimaryButton);
export default PrimaryButton;
  