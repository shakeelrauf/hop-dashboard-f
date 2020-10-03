import React from 'react';
import { connect } from 'react-redux';
import img from '../assets/spiner_loading.gif';
import PropTypes from 'prop-types';

let Loading = ({ loading }) => (
  loading
    ? <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </div>
    : null
);

Loading.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = (state) => ({ loading: state.test.loading });
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;
