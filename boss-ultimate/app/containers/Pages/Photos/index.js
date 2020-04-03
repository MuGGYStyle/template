import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import imgData from 'ba-api/imgDataMasonry';
import { PhotoGallery } from 'ba-components';

class Photos extends React.Component {
  render() {
    const title = brand.name + ' - Photo Gallery';
    const description = brand.desc;
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
        <PhotoGallery imgData={imgData} />
      </div>
    );
  }
}

export default Photos;
