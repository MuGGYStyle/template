import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import {
  withTheme, withStyles,
  createMuiTheme, MuiThemeProvider
} from '@material-ui/core/styles';
import 'ba-styles/vendors/react-loading-bar/index.css';
import { changeThemeAction } from 'ba-actions/UiActions';
import themePallete from 'ba-api/themePalette';
import TemplateSettings from 'ba-components/TemplateSettings';
import styles from '../Templates/appStyles-jss';

class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: true,
      open: false,
      palette: undefined,
      theme: createMuiTheme(themePallete(props.color)),
    };
  }

  componentWillMount = () => {
    this.onProgressShow();
  }

  componentDidMount = () => {
    this.playProgress();
    this.setState({ palette: this.props.palette });
  }

  componentWillUnmount() {
    this.onProgressShow();
  }

  onProgressShow = () => {
    this.setState({ pageLoaded: true });
  }

  onProgressHide = () => {
    this.setState({ pageLoaded: false });
  }

  playProgress = () => {
    this.onProgressShow();
    setTimeout(() => {
      this.onProgressHide();
    }, 500);
  }

  handleOpenPallete = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeTheme = event => {
    this.setState({ theme: createMuiTheme(themePallete(event.target.value)) });
    this.props.changeTheme(event.target.value);
  };

  render() {
    const { classes, children } = this.props;
    const {
      pageLoaded,
      theme,
      palette,
      open,
    } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            show={pageLoaded}
            color="rgba(255,255,255,.9)"
            showSpinner={false}
          />
          <Button onClick={this.handleOpenPallete} className={classes.btnPicker}>
            <span className={classes.btn}>
              <Icon className={classes.icon}>palette</Icon>Theme
            </span>
          </Button>
          <TemplateSettings
            open={open}
            palette={palette}
            changeTheme={this.handleChangeTheme}
            selectedValue={this.props.color}
            close={this.handleClose}
          />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  palette: PropTypes.object.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  palette: state.getIn([reducer, 'palette']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme()(withStyles(styles)(ThemeWrapperMapped));

