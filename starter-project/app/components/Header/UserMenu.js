import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Manager, Target, Popper } from 'react-popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Notification from '@material-ui/icons/Notifications';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import dummy from 'ba-api/dummyContents';
import messageStyles from 'ba-styles/Messages.scss';
import avatarApi from 'ba-api/avatars';
import styles from './header-jss';

class UserMenu extends React.Component {
  state = {
    openMenu: null
  };

  handleMenu = menu => {
    this.setState({
      openMenu: this.state.openMenu === menu ? null : menu,
    });
  };

  handleCloseToggle = () => {
    this.setState({ openMenu: null });
  };

  render() {
    const { classes } = this.props;
    const { openMenu } = this.state;
    return (
      <div className={classes.userMenu}>
        {/* ----- Notification Dropdown Menu ----- */}
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
              <IconButton
                aria-haspopup="true"
                onClick={() => this.handleMenu('notification')}
                color="inherit"
              >
                <Badge className={classes.badge} badgeContent={4} color="secondary">
                  <Notification />
                </Badge>
              </IconButton>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={openMenu === 'notification'}
            className={classNames({ [classes.popperClose]: openMenu !== 'notification' })}
          >
            <ClickAwayListener onClickAway={this.handleCloseToggle}>
              <Grow in={openMenu === 'notification'} id="menu_notification" style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.paper}>
                  <MenuList role="menu" className={classes.notifMenu}>
                    <MenuItem onClick={this.handleClose}>
                      <div className={messageStyles.messageInfo}>
                        <Avatar alt="User Name" src={avatarApi[0]} />
                        <ListItemText primary={dummy.text.subtitle} secondary={dummy.text.date} />
                      </div>
                    </MenuItem>
                    <Divider variant="inset" />
                    <MenuItem onClick={this.handleClose}>
                      <div className={messageStyles.messageInfo}>
                        <Avatar className={messageStyles.icon}>
                          <Info />
                        </Avatar>
                        <ListItemText primary={dummy.text.sentences} className={classes.textNotif} secondary={dummy.text.date} />
                      </div>
                    </MenuItem>
                    <Divider variant="inset" />
                    <MenuItem onClick={this.handleClose}>
                      <div className={messageStyles.messageSuccess}>
                        <Avatar className={messageStyles.icon}>
                          <Check />
                        </Avatar>
                        <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
                      </div>
                    </MenuItem>
                    <Divider variant="inset" />
                    <MenuItem onClick={this.handleClose}>
                      <div className={messageStyles.messageWarning}>
                        <Avatar className={messageStyles.icon}>
                          <Warning />
                        </Avatar>
                        <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
                      </div>
                    </MenuItem>
                    <Divider variant="inset" />
                    <MenuItem onClick={this.handleClose}>
                      <div className={messageStyles.messageError}>
                        <Avatar className={messageStyles.icon}>
                          <Error />
                        </Avatar>
                        <ListItemText primary="Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. " className={classes.textNotif} secondary="Jan 9, 2016" />
                      </div>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        {/* ----- End Notification Dropdown Menu ----- */}
        {/* ----- User Setting Dropdown Menu ----- */}
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
              <Button onClick={() => this.handleMenu('user-setting')}>
                <Avatar
                  alt={dummy.user.name}
                  src={dummy.user.avatar}
                />
              </Button>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={openMenu === 'user-setting'}
            className={classNames({ [classes.popperClose]: openMenu !== 'user-setting' })}
          >
            <ClickAwayListener onClickAway={this.handleCloseToggle}>
              <Grow in={openMenu === 'user-setting'} id="user_settint" style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.paper}>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My Calendar</MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      My Inbox
                      <ListItemIcon>
                        <Badge className={classNames(classes.badge, classes.badgeMenu)} badgeContent={2} color="secondary">&nbsp;</Badge>
                      </ListItemIcon>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <ExitToApp />
                      </ListItemIcon>
                      Log Out
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        {/* ----- End User Setting Dropdown Menu ----- */}
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMenu);
