import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import imgData from 'ba-api/imgData';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Type from 'ba-styles/Typography.scss';
import 'ba-styles/vendors/slick-carousel/slick-carousel.css';
import 'ba-styles/vendors/slick-carousel/slick.css';
import 'ba-styles/vendors/slick-carousel/slick-theme.css';
import Rating from './../Rating/Rating';
import styles from './product-jss';

const getThumb = imgData.map(a => a.thumb);

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ProductDetail extends React.Component {
  state = {
    qty: 1,
  }

  handleQtyChange = event => {
    this.setState({ qty: event.target.value });
  }

  submitToCart = itemAttr => {
    this.props.handleAddToCart(itemAttr);
    this.props.close();
  }

  render() {
    const {
      classes,
      open,
      close,
      detailContent,
      productIndex
    } = this.props;

    const { qty } = this.state;

    const itemAttr = (item) => {
      if (item !== undefined) {
        return {
          id: detailContent.getIn([productIndex, 'id']),
          name: detailContent.getIn([productIndex, 'name']),
          thumbnail: detailContent.getIn([productIndex, 'thumbnail']),
          price: detailContent.getIn([productIndex, 'price']),
          quantity: qty
        };
      }
      return false;
    };

    const settings = {
      customPaging: (i) => (
        <a>
          <img src={getThumb[i]} alt="thumb" />
        </a>
      ),
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={close}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {detailContent.getIn([productIndex, 'name'])}
            </Typography>
            <IconButton color="inherit" onClick={() => close()} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.detailContainer}>
          <Grid container className={classes.root} spacing={24}>
            <Grid item md={5} sm={12} xs={12}>
              <div className="container thumb-nav">
                <Slider {...settings}>
                  {imgData.map((item, index) => {
                    if (index >= 5) {
                      return false;
                    }
                    return (
                      <div key={index.toString()} className={classes.item}>
                        <img src={item.img} alt={item.title} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <section className={classes.detailWrap}>
                <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
                  {detailContent.getIn([productIndex, 'name'])}
                </Typography>
                <div className={classes.price}>
                  <Typography variant="h5">
                    <span>${detailContent.getIn([productIndex, 'price'])}</span>
                  </Typography>
                  {detailContent.getIn([productIndex, 'discount']) !== '' && (
                    <Fragment>
                      <Typography variant="caption" component="h5">
                        <span className={Type.lineThrought}>${detailContent.getIn([productIndex, 'prevPrice'])}</span>
                      </Typography>
                      <Chip label={'Discount ' + detailContent.getIn([productIndex, 'discount'])} className={classes.chipDiscount} />
                    </Fragment>
                  )}
                  {detailContent.getIn([productIndex, 'soldout']) && (
                    <Chip label="Sold Out" className={classes.chipSold} />
                  )}
                </div>
                <div className={classes.ratting}>
                  <Rating value={detailContent.getIn([productIndex, 'ratting'])} max={5} readOnly />
                </div>
                <Typography component="p" className={classes.desc}>
                  {detailContent.getIn([productIndex, 'desc'])}
                </Typography>
                {!detailContent.getIn([productIndex, 'soldout']) && (
                  <div className={classes.btnArea}>
                    <Typography variant="subtitle1">
                      Quantity :
                    </Typography>
                    <TextField
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      margin="none"
                      value={qty}
                      className={classes.quantity}
                      onChange={this.handleQtyChange}
                    />
                    <Button variant="contained" onClick={() => this.submitToCart(itemAttr(detailContent))} color="secondary">
                      <AddShoppingCart /> Add to cart
                    </Button>
                  </div>
                )}
              </section>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    );
  }
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  detailContent: PropTypes.object.isRequired,
  productIndex: PropTypes.number,
};

ProductDetail.defaultProps = {
  productIndex: undefined
};

export default withStyles(styles)(ProductDetail);
