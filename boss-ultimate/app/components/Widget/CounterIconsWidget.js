import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AccountBox from '@material-ui/icons/AccountBox';
import ImportContacts from '@material-ui/icons/ImportContacts';
import Pets from '@material-ui/icons/Pets';
import Star from '@material-ui/icons/Star';
import colorfull from 'ba-api/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';


class CounterIconWidget extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounterFull}>
        <Grid container spacing={16}>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[0]}
              start={0}
              end={105}
              duration={3}
              title="New Customers"
            >
              <AccountBox className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[1]}
              start={0}
              end={321}
              duration={3}
              title="New Articles"
            >
              <ImportContacts className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={67}
              duration={3}
              title="New Contributor"
            >
              <Pets className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={80}
              duration={3}
              title="Average Income"
            >
              <Star className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconWidget);
