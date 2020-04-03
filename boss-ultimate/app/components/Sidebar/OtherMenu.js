import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import OtherMenuContent from 'ba-api/otherMenu';
import styles from './sidebar-jss';

class OtherMenu extends React.Component {
  render() {
    const { toggleDrawerOpen, classes } = this.props;
    const getOtherMenu = menuArray => menuArray.map((item, index) => {
      const keyIndex = index.toString();
      return (
        <div key={keyIndex}>
          <ListItem
            button
            component={NavLink}
            to={item.link}
            activeClassName={classes.active}
            onClick={toggleDrawerOpen}
          >
            <ListItemText secondary={item.name} />
          </ListItem>
        </div>
      );
    });

    return (
      <div>
        {getOtherMenu(OtherMenuContent)}
      </div>
    );
  }
}

OtherMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(OtherMenu);
