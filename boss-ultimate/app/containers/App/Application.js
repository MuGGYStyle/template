import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  DashboardV1, DashboardV2,
  Parent, AppLayout, Responsive, Grid,
  SimpleTable, AdvancedTable, TablePlayground,
  TreeTable, CrudTable,
  ReduxForm, DateTimePicker, CheckboxRadio,
  Switches, Selectbox, Rating,
  SliderRange, Buttons, Textbox,
  Autocomplete, Upload, TextEditor,
  Avatars, Accordion, Badges,
  List, PopoverTooltip, Notification,
  Typography, Tabs, Cards,
  ImageGrid, Progress, DialogModal,
  Steppers, Paginations, DrawerMenu,
  Breadcrumbs, Icons,
  SliderCarousel, Tags, Dividers,
  LineCharts, BarCharts, AreaCharts, PieCharts,
  RadarCharts, ScatterCharts, CompossedCharts, ResponsiveCharts,
  Contact, Chat, Email,
  Ecommerce, SocialMedia, Calendar,
  Profile, BlankPage,
  Photos, Error, Settings,
  HelpSupport, MapMarker, MapDirection, SearchMap,
  TrafficIndicator, StreetViewMap, NotFound
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    return (
      <Dashboard history={this.props.history}>
        <Switch>
          <Route exact path="/app" component={DashboardV1} />
          <Route exact path="/app/dashboard-v2" component={DashboardV2} />
          { /* Layout */ }
          <Route exact path="/app/layouts" component={Parent} />
          <Route path="/app/layouts/grid" component={Grid} />
          <Route path="/app/layouts/app-layout" component={AppLayout} />
          <Route path="/app/layouts/responsive" component={Responsive} />
          { /* Table */ }
          <Route exact path="/app/tables" component={Parent} />
          <Route path="/app/tables/basic-table" component={SimpleTable} />
          <Route path="/app/tables/data-table" component={AdvancedTable} />
          <Route path="/app/tables/table-playground" component={TablePlayground} />
          <Route path="/app/tables/tree-table" component={TreeTable} />
          <Route path="/app/tables/crud-table" component={CrudTable} />
          { /* Form & Button */ }
          <Route exact path="/app/forms" component={Parent} />
          <Route path="/app/forms/reduxform" component={ReduxForm} />
          <Route path="/app/forms/date-time-picker" component={DateTimePicker} />
          <Route path="/app/forms/checkbox-radio" component={CheckboxRadio} />
          <Route path="/app/forms/switches" component={Switches} />
          <Route path="/app/forms/selectbox" component={Selectbox} />
          <Route path="/app/forms/ratting" component={Rating} />
          <Route path="/app/forms/slider-range" component={SliderRange} />
          <Route path="/app/forms/buttons" component={Buttons} />
          <Route path="/app/forms/textfields" component={Textbox} />
          <Route path="/app/forms/autocomplete" component={Autocomplete} />
          <Route path="/app/forms/upload" component={Upload} />
          <Route path="/app/forms/wysiwyg-editor" component={TextEditor} />
          { /* Ui Components */}
          <Route exact path="/app/ui" component={Parent} />
          <Route path="/app/ui/avatars" component={Avatars} />
          <Route path="/app/ui/accordion" component={Accordion} />
          <Route path="/app/ui/badges" component={Badges} />
          <Route path="/app/ui/list" component={List} />
          <Route path="/app/ui/popover-tooltip" component={PopoverTooltip} />
          <Route path="/app/ui/notification" component={Notification} />
          <Route path="/app/ui/typography" component={Typography} />
          <Route path="/app/ui/tabs" component={Tabs} />
          <Route path="/app/ui/card-papper" component={Cards} />
          <Route path="/app/ui/image-grid" component={ImageGrid} />
          <Route path="/app/ui/progress" component={Progress} />
          <Route path="/app/ui/dialog-modal" component={DialogModal} />
          <Route path="/app/ui/steppers" component={Steppers} />
          <Route path="/app/ui/paginations" component={Paginations} />
          <Route path="/app/ui/drawer-menu" component={DrawerMenu} />
          <Route path="/app/ui/breadcrumbs" component={Breadcrumbs} />
          <Route path="/app/ui/icons" component={Icons} />
          <Route path="/app/ui/slider-carousel" component={SliderCarousel} />
          <Route path="/app/ui/tags" component={Tags} />
          <Route path="/app/ui/dividers" component={Dividers} />
          { /* Chart */ }
          <Route exact path="/app/charts" component={Parent} />
          <Route path="/app/charts/line-charts" component={LineCharts} />
          <Route path="/app/charts/bar-charts" component={BarCharts} />
          <Route path="/app/charts/area-charts" component={AreaCharts} />
          <Route path="/app/charts/pie-charts" component={PieCharts} />
          <Route path="/app/charts/radar-charts" component={RadarCharts} />
          <Route path="/app/charts/scatter-charts" component={ScatterCharts} />
          <Route path="/app/charts/compossed-chart" component={CompossedCharts} />
          <Route path="/app/charts/responsive-chart" component={ResponsiveCharts} />
          { /* Sample Apps */ }
          <Route path="/app/pages/contact" component={Contact} />
          <Route path="/app/pages/chat" component={Chat} />
          <Route path="/app/pages/email" component={Email} />
          <Route path="/app/pages/social-media" component={SocialMedia} />
          <Route path="/app/pages/ecommerce" component={Ecommerce} />
          <Route path="/app/pages/calendar" component={Calendar} />
          { /* Pages */ }
          <Route exact path="/app/pages" component={Parent} />
          <Route path="/app/pages/user-profile" component={Profile} />
          <Route path="/app/pages/blank-page" component={BlankPage} />
          <Route path="/app/pages/photo-gallery" component={Photos} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route path="/app/pages/settings" component={Settings} />
          <Route path="/app/pages/help-support" component={HelpSupport} />
          { /* Map */ }
          <Route exact path="/app/maps" component={Parent} />
          <Route path="/app/maps/map-marker" component={MapMarker} />
          <Route path="/app/maps/map-direction" component={MapDirection} />
          <Route path="/app/maps/map-searchbox" component={SearchMap} />
          <Route path="/app/maps/map-traffic" component={TrafficIndicator} />
          <Route path="/app/maps/street-view" component={StreetViewMap} />
          { /* Default */ }
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
