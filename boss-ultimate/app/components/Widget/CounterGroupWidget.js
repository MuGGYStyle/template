import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
  PieChart, Pie, Cell
} from 'recharts';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';
import { data1, data2 } from 'ba-api/chartMiniData';
import colorfull from 'ba-api/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';

const colors = [red[300], blue[300], cyan[300], lime[300]];

class CounterGroupWidget extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <CounterWidget
              color={colorfull[0]}
              start={0}
              end={105}
              duration={3}
              title="New Customers"
            >
              <BarChart width={100} height={40} data={data1}>
                <Bar dataKey="uv" fill="#ffffff" />
              </BarChart>
            </CounterWidget>
          </Grid>
          <Grid item xs={6}>
            <CounterWidget
              color={colorfull[1]}
              start={0}
              end={321}
              duration={3}
              title="New Articles"
            >
              <AreaChart width={100} height={60} data={data1}>
                <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
              </AreaChart>
            </CounterWidget>
          </Grid>
          <Grid item xs={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={67}
              duration={3}
              title="New Contributor"
            >
              <LineChart width={100} height={80} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterWidget>
          </Grid>
          <Grid item xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={80}
              duration={3}
              title="Average Income"
            >
              <PieChart width={100} height={100}>
                <Pie
                  data={data2}
                  cx={50}
                  cy={50}
                  dataKey="value"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#FFFFFF"
                  paddingAngle={5}
                >
                  {
                    data2.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
                  }
                </Pie>
              </PieChart>
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CounterGroupWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterGroupWidget);
