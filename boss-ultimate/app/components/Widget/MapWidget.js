import React from 'react';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import dummy from 'ba-api/dummyContents';
import Paper from '@material-ui/core/Paper';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import IdentityCard from './../CardPaper/IdentityCard';
import styles from './widget-jss';

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    {...props}
    defaultZoom={8}
    defaultCenter={{ lat: -34.300, lng: 119.344 }}
  >
    <Marker
      position={{ lat: -34.300, lng: 118.044 }}
    />
  </GoogleMap>
));

class MapWidget extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.mapWrap}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <div className={classes.address}>
          <IdentityCard
            title="Contact and Address"
            name={dummy.user.name}
            avatar={dummy.user.avatar}
            phone="(+8543201213)"
            address="Town Hall Building no.45 Block C - ABC Street"
          />
        </div>
      </Paper>
    );
  }
}

MapWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapWidget);
