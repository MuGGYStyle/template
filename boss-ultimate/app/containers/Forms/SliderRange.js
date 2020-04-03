import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'ba-components';
import { SliderInput, RangeInput } from './demos';

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
        <PapperBlock title="Slider Input" desc="React component for inputting numeric values within a range (range slider)">
          <div>
            <SliderInput />
            <SourceReader componentName={docSrc + 'SliderInput.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Range Input" desc="InputRange is a React component allowing users to input numeric values within a specific range. It can accept a single value, or a range of values (min/max). By default, basic styles are applied, but can be overridden depending on your design requirements.">
          <div>
            <RangeInput />
            <SourceReader componentName={docSrc + 'RangeInput.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
