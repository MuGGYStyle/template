import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import styles from './themeStyles-jss';
import ThemeThumb from './ThemeThumb';

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class TemplateSettings extends React.Component {
  render() {
    const {
      classes,
      palette,
      open,
      selectedValue,
      changeTheme,
      close
    } = this.props;
    const getItem = dataArray => dataArray.map((item, index) => (
      <FormControlLabel
        key={index.toString()}
        className={classes.themeField}
        control={
          <ThemeThumb
            value={item.value}
            selectedValue={selectedValue}
            handleChange={changeTheme}
            name={item.name}
          />
        }
      />
    ));
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        className={classes.themeChooser}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Icon>palette</Icon> Choose Theme
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <FormControl component="fieldset" className={classes.group}>
              { palette !== undefined && getItem(palette) }
            </FormControl>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TemplateSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  palette: PropTypes.object,
  selectedValue: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

TemplateSettings.defaultProps = {
  palette: undefined
};

export default withStyles(styles)(TemplateSettings);
