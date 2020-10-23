import React from 'react';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  input: {
    display: 'none'
  },
});

class UploadImage extends React.Component {

  render() {
    const { classes, children, handleUpload, className } = this.props;
    return (
      <React.Fragment>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUpload}
        />
        <label htmlFor="contained-button-file" className={className}>
          {children}
        </label>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UploadImage);
