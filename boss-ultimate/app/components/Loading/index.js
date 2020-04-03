import React from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 30px)',
    left: 'calc(50% - 30px)',
  }
};

function Loading(props) {
  return (<CircularProgress className={props.classes.circularProgress} size={60} color="secondary" />);
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default (withStyles(styles)(Loading));
