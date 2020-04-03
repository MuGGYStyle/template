import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import settingList from 'ba-api/settingList';
import DetailSettings from './DetailSettings';
import styles from './settings-jss';

class Settings extends React.Component {
  state = {
    open: false,
    checked: ['switch', 'check2'],
    keyword: ''
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSearch = event => {
    this.setState({ keyword: event.target.value.toLowerCase() });
  }

  render() {
    const title = brand.name;
    const description = brand.desc;
    const { classes } = this.props;
    const { keyword } = this.state;
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
          <SettingsIcon className={classes.iconTitle} />
          Appication Settings
        </Typography>
        <AppBar position="static" color="inherit" className={classes.searchSettings}>
          <Toolbar>
            <div className={classes.flex}>
              <div className={classes.wrapper}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input className={classes.input} placeholder="Find a setting" onChange={(event) => this.handleSearch(event)} />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <section className={classes.settingList}>
          <Grid container spacing={16}>
            {settingList.map(menu => {
              const rawKey = menu.name + menu.caption;
              if (rawKey.toLowerCase().indexOf(keyword) === -1) {
                return false;
              }
              return (
                <Grid item md={3} sm={4} xs={12}>
                  <Button variant="outlined" onClick={this.handleClickOpen} color="secondary" className={classes.button}>
                    <Icon className={classes.icon}>{menu.icon}</Icon>
                    {menu.name}
                    <Typography variant="caption" noWrap className={classes.info}>
                      {menu.caption}
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </section>
        <DetailSettings open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);
