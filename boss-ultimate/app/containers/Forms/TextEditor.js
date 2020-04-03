import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'ba-components';
import { Wysiwyg } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DateTime extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'containers/Forms/demos/';
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
        <PapperBlock title="Text Editor" desc="A Wysiwyg Built on ReactJS and DraftJS. Editor can be simply imported and used as a React Component. Make sure to also include react-draft-wysiwyg.css from node_modules.">
          <div>
            <Wysiwyg />
            <SourceReader componentName={docSrc + 'Wysiwyg.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
