
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class Toast extends Component {
  componentWillMount(){
    setTimeout(()=> {
      this.props.onDismissClick();
    },5000);
  }
  render() {
    return (
      <Alert  severity={this.props.type}
        onClose={this.props.onDismissClick}
      >
        {this.props.text}
      </Alert>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}

Toast.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Toast;