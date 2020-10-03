import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../store/actions';
import Button from '@material-ui/core/Button';

let CustomButton=({text , getNews})=>(
    <Button variant="contained" color="primary" onClick={getNews}>
      {text ? text : 'Hello'}
    </Button>
)
const mapDispatchToProps = {
     getNews: getNews,
};
const mapStateToProps = (state) => ({text: state.test.text})

CustomButton = connect(mapStateToProps,mapDispatchToProps)(CustomButton);
export default CustomButton;