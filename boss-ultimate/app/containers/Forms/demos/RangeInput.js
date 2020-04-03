import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputRange from 'react-input-range';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'ba-styles/vendors/react-input-range/react-input-range.css';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  inputRange: {
    width: 300,
    margin: `${theme.spacing.unit * 3}px 5px`,
  }
});

class RangeInput extends PureComponent {
  state = {
    valueRange: {
      min: 3,
      max: 7,
    },
    valueRangeLabel: {
      min: 5,
      max: 10,
    },
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={16}
        >
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Range Input Basic</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <InputRange
                  draggableTrack
                  maxValue={20}
                  minValue={0}
                  onChange={value => this.setState({ valueRange: value })}
                  value={this.state.valueRange}
                />
              </div>
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Range with Label</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <InputRange
                  maxValue={20}
                  minValue={0}
                  formatLabel={value => `${value} kg`}
                  value={this.state.valueRangeLabel}
                  onChange={value => this.setState({ valueRangeLabel: value })}
                />
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

RangeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RangeInput);
