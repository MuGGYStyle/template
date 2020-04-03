import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'ba-api/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import imgApi from 'ba-api/images';
import avatarApi from 'ba-api/avatars';
import {
  SliderWidget,
  CounterGroupWidget,
  BigChartWidget,
  TableWidget,
  TaskWidget,
  ProfileCard,
  ProfileWidget,
  ProgressWidget,
  GeneralCard,
  Quote,
  PlayerCard
} from 'ba-components';
import styles from './dashboard-jss';


class Dashboard extends PureComponent {
  render() {
    const title = brand.name + ' - Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
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
        <Grid container spacing={24} className={classes.root}>
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.sliderWrap}>
              <SliderWidget />
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={classes.noPadding}>
            <CounterGroupWidget />
          </Grid>
        </Grid>
        <Divider className={classes.dividerMini} />
        <Grid container spacing={24} className={classes.root}>
          <Grid item xs={12}>
            <BigChartWidget />
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.root}>
          <Grid item md={7} xs={12}>
            <Divider className={classes.dividerMini} />
            <TableWidget />
            <Divider className={classes.divider} />
            <TaskWidget />
            <Divider className={classes.divider} />
            <PlayerCard
              title="Live From Space"
              artist="Mac Miller"
              cover={imgApi[32]}
            />
          </Grid>
          <Grid item md={5}>
            <Divider className={classes.dividerMini} />
            <ProfileCard
              cover={imgApi[41]}
              avatar={avatarApi[6]}
              name="John Doe"
              title="UX designer"
              connection={10}
              btnText="See Profile"
              isVerified
            />
            <Divider className={classes.divider} />
            <ProgressWidget />
            <Divider className={classes.divider} />
            <ProfileWidget />
            <Divider className={classes.divider} />
            <GeneralCard liked={1} shared={20} commented={15}>
              <Quote align="left" content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one." footnote="John Lennon" />
            </GeneralCard>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
