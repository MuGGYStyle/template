import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Dvr from '@material-ui/icons/Dvr';
import Explore from '@material-ui/icons/Explore';
import Healing from '@material-ui/icons/Healing';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import LocalActivity from '@material-ui/icons/LocalActivity';
import Typography from '@material-ui/core/Typography';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { data1 } from 'ba-api/chartData';
import Type from 'ba-styles/Typography.scss';
import colorfull from 'ba-api/colorfull';
import styles from './widget-jss';
import PapperBlock from './../PapperBlock/PapperBlock';

const color = ({
  main: colorfull[5],
  maindark: '#2196F3',
  secondary: colorfull[3],
  third: colorfull[0],
});

class BigChartWidget extends PureComponent {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <PapperBlock whiteBg noMargin title="Top Product Sales" desc="">
        <Grid container spacing={16}>
          <Grid item md={8} xs={12}>
            <ul className={classes.bigResume}>
              <li>
                <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                  <Dvr />
                </Avatar>
                <Typography variant="h6">
                  1234
                  <Typography>Monitors</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                  <Explore />
                </Avatar>
                <Typography variant="h6">
                  5678
                  <Typography>Compas</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.blueAvatar)}>
                  <Healing />
                </Avatar>
                <Typography variant="h6">
                  910
                  <Typography>Badges</Typography>
                </Typography>
              </li>
              <li>
                <Avatar className={classNames(classes.avatar, classes.tealAvatar)}>
                  <LocalActivity />
                </Avatar>
                <Typography variant="h6">
                  1112
                  <Typography>Tickets</Typography>
                </Typography>
              </li>
            </ul>
            <div className={classes.chartWrap}>
              <div className={classes.chartFluid}>
                <ResponsiveContainer>
                  <ComposedChart
                    data={data1}
                    margin={{
                      top: 0,
                      right: 30,
                      left: 20,
                      bottom: 20
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="amt" fill={color.main} stroke={color.maindark} />
                    <Bar dataKey="pv" barSize={20} fill={color.secondary} />
                    <Line type="monotone" dataKey="uv" stroke={color.third} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button"><span className={Type.bold}>Performance Listing</span></Typography>
            <Divider className={classes.divider} />
            <ul className={classes.secondaryWrap}>
              <li>
                <Typography gutterBottom>Monitoring Quality</Typography>
                <LinearProgress variant="determinate" className={classNames(classes.progress, classes.pinkProgress)} value={24} />
              </li>
              <li>
                <Typography gutterBottom>Compas Speed</Typography>
                <LinearProgress variant="determinate" className={classNames(classes.progress, classes.purpleProgress)} value={89} />
              </li>
              <li>
                <Typography gutterBottom>Total Badges</Typography>
                <LinearProgress variant="determinate" className={classNames(classes.progress, classes.orangeProgress)} value={78} />
              </li>
              <li>
                <Typography gutterBottom>Sold Ticket</Typography>
                <LinearProgress variant="determinate" className={classNames(classes.progress, classes.greenProgress)} value={55} />
              </li>
              <li>
                <Typography gutterBottom>App Performance</Typography>
                <LinearProgress variant="determinate" className={classNames(classes.progress, classes.blueProgress)} value={80} />
              </li>
            </ul>
          </Grid>
        </Grid>
      </PapperBlock>
    );
  }
}

BigChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BigChartWidget);
