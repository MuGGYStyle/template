import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import codeStyle from 'ba-styles/Code.scss';
import { SourceReader, PapperBlock } from 'ba-components';
import { TreeTableDemo, TreeTableDemoIcon } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class TreeTablePage extends Component {
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
        <PapperBlock title="Tree Table Arrow Icon" desc="A simple Tree Collapsed/Expanded Table">
          <div>
            <Paper className={classes.root}>
              <TreeTableDemo />
            </Paper>
            <SourceReader componentName={docSrc + 'TreeTableDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Tree Table +/- Icon" desc="A Tree Table with +/- Icon">
          <div>
            <Markdown className={codeStyle.codePre} source="Just add attribute ``` icon='plusminus' ``` to change icon to +/-" />
            <Paper className={classes.root}>
              <TreeTableDemoIcon />
            </Paper>
            <SourceReader componentName={docSrc + 'TreeTableDemoIcon.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

TreeTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreeTablePage);
