import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import AppBar from '@material-ui/core/AppBar';
import dummy from 'ba-api/dummyContents';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import Favorite from '@material-ui/icons/Favorite';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'ba-api/timelineData';
import { fetchAction } from 'ba-actions/SocmedActions';
import {
  Cover,
  About,
  Connection,
  Favorites,
  Albums
} from 'ba-components';

function TabContainer(props) {
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {props.children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class UserProfile extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.fetchData(data);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const title = brand.name + ' - Profile';
    const description = brand.desc;
    const { dataProps } = this.props;
    const { value } = this.state;
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
        <Cover
          coverImg="/images/material_bg.svg"
          avatar={dummy.user.avatar}
          name={dummy.user.name}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              variant="fullWidth"
              centered
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<AccountCircle />} />
              <Tab icon={<SupervisorAccount />} />
              <Tab icon={<Favorite />} />
              <Tab icon={<PhotoLibrary />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              variant="fullWidth"
              centered
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<AccountCircle />} label="ABOUT" />
              <Tab icon={<SupervisorAccount />} label="20 CONNECTIONS" />
              <Tab icon={<Favorite />} label="18 FAVORITES" />
              <Tab icon={<PhotoLibrary />} label="4 ALBUMS" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={dataProps} /></TabContainer>}
        {value === 1 && <TabContainer><Connection /></TabContainer>}
        {value === 2 && <TabContainer><Favorites /></TabContainer>}
        {value === 3 && <TabContainer><Albums /></TabContainer>}
      </div>
    );
  }
}

UserProfile.propTypes = {
  dataProps: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, 'dataTimeline'])
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch)
});

const UserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(UserProfile);

export default UserProfileMapped;
