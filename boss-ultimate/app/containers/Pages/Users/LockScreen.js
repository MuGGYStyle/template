import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LockForm } from 'ba-components';
import styles from 'ba-components/Forms/user-jss';

class ResetPassword extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Lock Screen';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <Grid container spacing={24} alignItems="center" direction="row" justify="center">
            <Grid item md={4} xs={11}>
              {/* ----------------------------------------------------------------------*/}
              {/* Load Login Form */}
              <LockForm onSubmit={(values) => this.submitForm(values)} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResetPassword);
