import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { SourceReader, PapperBlock } from 'ba-components';
import {
  SingleCarousel,
  MultipleCarousel,
  AutoplayCarousel,
  ThumbnailCarousel,
  VerticalCarousel,
  CustomCarousel,
  AnimatedSlider
} from './demos';

class SliderCarousel extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/SliderCaraousel/';
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
        <PapperBlock title="Animated Slider" desc="A Slider/Carousel component for React supporting custom css animations.">
          <div>
            <AnimatedSlider />
            <SourceReader componentName={docSrc + 'AnimatedSlider.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Simple Slider" desc="React slick is a carousel component built with React. It is a react port of  slick carousel">
          <div>
            <SingleCarousel />
            <SourceReader componentName={docSrc + 'SingleCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Carousel" desc="">
          <div>
            <MultipleCarousel />
            <SourceReader componentName={docSrc + 'MultipleCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Autoplay Carousel" desc="">
          <div>
            <AutoplayCarousel />
            <SourceReader componentName={docSrc + 'AutoplayCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Carousel with Thumbnail Pagination" desc="">
          <div>
            <ThumbnailCarousel />
            <SourceReader componentName={docSrc + 'ThumbnailCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Vertical Carousel" desc="">
          <div>
            <VerticalCarousel />
            <SourceReader componentName={docSrc + 'VerticalCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Navigation Carousel" desc="">
          <div>
            <CustomCarousel />
            <SourceReader componentName={docSrc + 'CustomCarousel.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default SliderCarousel;
