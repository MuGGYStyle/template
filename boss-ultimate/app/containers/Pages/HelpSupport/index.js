import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import Typography from '@material-ui/core/Typography';
import LiveHelp from '@material-ui/icons/LiveHelp';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './helpSupport-jss';
import Qna from './Qna';
import ContactForm from './ContactForm';

class Settings extends React.Component {
  showResult(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      window.alert(`You submitted:\n\n${this.state.valueForm}`);
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name;
    const description = brand.desc;
    const { classes, width } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Typography variant="h5" className={classes.title}>
          <LiveHelp className={classes.iconTitle} />
          Help &amp; Support
        </Typography>
        <Grid container spacing={16} direction={isWidthUp('md', width) ? 'row' : 'column-reverse'}>
          <Grid item md={6} xs={12}>
            <Qna />
          </Grid>
          <Grid item md={6} xs={12}>
            <ContactForm onSubmit={(values) => this.showResult(values)} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(Settings));
