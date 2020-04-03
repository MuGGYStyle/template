import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ReportIcon from '@material-ui/icons/Report';
import StarIcon from '@material-ui/icons/Star';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import LabelIcon from '@material-ui/icons/Label';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import styles from './email-jss';

const MenuList = props => {
  const {
    classes,
    compose,
    goto,
    selected,
  } = props;
  return (
    <Fragment>
      <List>
        <ListItem>
          <Button variant="contained" onClick={compose} fullWidth color="primary">
            <Add /> Compose
          </Button>
        </ListItem>
        <ListItem button className={selected === 'inbox' ? classes.selected : ''} onClick={() => goto('inbox')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button className={selected === 'stared' ? classes.selected : ''} onClick={() => goto('stared')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Stared" />
        </ListItem>
        <ListItem button className={selected === 'sent' ? classes.selected : ''} onClick={() => goto('sent')}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
        <ListItem button className={selected === 'spam' ? classes.selected : ''} onClick={() => goto('spam')}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      <List>
        <ListItem button className={selected === 'updates' ? classes.selected : ''} onClick={() => goto('updates')}>
          <ListItemIcon>
            <Flag className={classes.iconOrange} />
          </ListItemIcon>
          <ListItemText primary="Updates" />
        </ListItem>
        <ListItem button className={selected === 'social' ? classes.selected : ''} onClick={() => goto('social')}>
          <ListItemIcon>
            <People className={classes.iconRed} />
          </ListItemIcon>
          <ListItemText primary="Social" />
        </ListItem>
        <ListItem button className={selected === 'promos' ? classes.selected : ''} onClick={() => goto('promos')}>
          <ListItemIcon>
            <LabelIcon className={classes.iconBlue} />
          </ListItemIcon>
          <ListItemText primary="Promos" />
        </ListItem>
        <ListItem button className={selected === 'forums' ? classes.selected : ''} onClick={() => goto('forums')}>
          <ListItemIcon>
            <QuestionAnswer className={classes.iconCyan} />
          </ListItemIcon>
          <ListItemText primary="Forums" />
        </ListItem>
      </List>
    </Fragment>
  );
};

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

const MenuEmail = withStyles(styles)(MenuList);

class EmailSidebar extends React.Component {
  render() {
    const {
      classes,
      compose,
      goto,
      selected,
      handleDrawerToggle,
      mobileOpen
    } = this.props;
    return (
      <Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbar} />
            <MenuEmail compose={compose} goto={goto} selected={selected} />
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.sidebar}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <MenuEmail compose={compose} goto={goto} selected={selected} />
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

EmailSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(EmailSidebar);
