import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EmptyData } from 'ba-components';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function EmptyTable(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Toolbar>
        <div className={classes.title}>
          <Typography variant="h6">Nutrition</Typography>
        </div>
      </Toolbar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="dense">Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <EmptyData />
    </Paper>
  );
}

EmptyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmptyTable);
