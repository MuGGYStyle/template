import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { SourceReader, PapperBlock } from 'ba-components';
import { CommonBadges, VariantBadges } from './demos';

class Badges extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Badges/';
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
        <PapperBlock title="Common Badges" desc="Badge generates a small badge to the top-right of its child(ren).">
          <div>
            <CommonBadges />
            <SourceReader componentName={docSrc + 'CommonBadges.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Variant Badges" desc="Examples of badges with icon and in tab, using primary and secondary colors. The badge is applied to its children.">
          <div>
            <VariantBadges />
            <SourceReader componentName={docSrc + 'VariantBadges.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Badges;
