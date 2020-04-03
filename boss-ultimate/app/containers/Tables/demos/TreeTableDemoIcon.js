import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import openAction from 'ba-actions/TreeTableActions';
import { TreeTable } from 'ba-components';
import data from './dataTreeTable.js';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const branch = 'treeTablePM';

class TreeTableDemoIcon extends Component {
  render() {
    const {
      arrowMore,
      treeOpen,
      classes,
      toggleTree
    } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <TreeTable
            treeOpen={treeOpen}
            toggleTree={toggleTree}
            arrowMore={arrowMore}
            dataTable={data}
            branch={branch}
            icon="plusminus"
          />
        </Paper>
      </div>
    );
  }
}

TreeTableDemoIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  treeOpen: PropTypes.object.isRequired,
  arrowMore: PropTypes.object.isRequired,
  toggleTree: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  treeOpen: state.getIn([branch, 'treeOpen']),
  arrowMore: state.getIn([branch, 'arrowMore']),
});

const mapDispatchToProps = dispatch => ({
  toggleTree: bindActionCreators(openAction, dispatch)
});

const TreeTableIconMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeTableDemoIcon);

export default withStyles(styles)(TreeTableIconMapped);
