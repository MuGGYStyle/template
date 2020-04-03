import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { SourceReader, PapperBlock } from 'ba-components';
import { CrudTableDemo, CrudTbFormDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CrudTablePage extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Tables/demos/';
    const { classes } = this.props;
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
        <PapperBlock title="CRUD Table" desc="The CRUD Table supports editing features including creating, updating and deleting rows. The editing state contains information about rows currently being edited, changes applied to a particular row, and rows that have been deleted and created.">
          <div>
            <Paper className={classes.root}>
              <CrudTableDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'CrudTableDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="CRUD Table with Redux Form" desc="In the CRUD Table Form mode allow You to create or edit via dedicated form(Redux Form). The design form itself inspired by Gmail with floating design and it can be expanded become popup mode">
          <div>
            <Paper className={classes.root}>
              <CrudTbFormDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'CrudTbFormDemo.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

CrudTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrudTablePage);
