import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Type from 'ba-styles/Typography.scss';
import Slider from 'react-animated-slider';
import 'ba-styles/vendors/react-animated-slider/react-animated-slider.css';
import imgApi from 'ba-api/images';
import avatarApi from 'ba-api/avatars';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    button: 'Read More',
    image: imgApi[3],
    user: 'Luanda Gjokaj',
    userProfile: avatarApi[1]
  },
  {
    title: 'Tortor Dapibus',
    description:
    'Cras mattis consectetur purus sit amet fermentum.',
    button: 'Discover',
    image: imgApi[15],
    user: 'Erich Behrens',
    userProfile: avatarApi[8]
  },
  {
    title: 'Phasellus volutpat',
    description:
    'Lorem ipsum dolor sit amet',
    button: 'Buy now',
    image: imgApi[29],
    user: 'Bruno Vizovskyy',
    userProfile: avatarApi[10]
  }
];

const SliderWidget = () => (
  <div>
    <Slider className="slider-wrapper short" autoplay={3000}>
      {content.map((item, index) => (
        <div
          key={index.toString()}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <Typography variant="subtitle1" component="h3" className={Type.light} gutterBottom>{item.title}</Typography>
            <Button variant="contained" color="primary">
              {item.button}
            </Button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default SliderWidget;
