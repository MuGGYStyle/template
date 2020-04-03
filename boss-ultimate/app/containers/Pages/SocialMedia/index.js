import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import brand from 'ba-api/brand';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'ba-api/timelineData';
import {
  fetchAction,
  postAction,
  toggleLikeAction,
  fetchCommentAction,
  postCommentAction,
  closeNotifAction
} from 'ba-actions/SocmedActions';
import { Timeline, WritePost, SideSection, Notification } from 'ba-components';

class SocialMedia extends React.Component {
  componentDidMount() {
    this.props.fetchData(data);
  }

  render() {
    const title = brand.name + ' - Social Media';
    const description = brand.desc;
    const {
      dataProps,
      submitPost,
      submitLike,
      submitComment,
      fetchComment,
      commentIndex,
      closeNotif,
      messageNotif,
    } = this.props;
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
        <Notification close={() => closeNotif()} message={messageNotif} />
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={24}
        >
          <Grid item md={8} xs={12}>
            <div>
              <WritePost submitPost={submitPost} />
              <Timeline
                dataTimeline={dataProps}
                onlike={submitLike}
                submitComment={submitComment}
                fetchComment={fetchComment}
                commentIndex={commentIndex}
              />
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <SideSection />
          </Grid>
        </Grid>
      </div>
    );
  }
}

SocialMedia.propTypes = {
  fetchData: PropTypes.func.isRequired,
  submitPost: PropTypes.func.isRequired,
  submitLike: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  dataProps: PropTypes.object.isRequired,
  fetchComment: PropTypes.func.isRequired,
  commentIndex: PropTypes.number.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = 'socmed';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, 'dataTimeline']),
  commentIndex: state.getIn([reducer, 'commentIndex']),
  messageNotif: state.getIn([reducer, 'notifMsg']),
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  submitPost: bindActionCreators(postAction, dispatch),
  submitComment: bindActionCreators(postCommentAction, dispatch),
  submitLike: bindActionCreators(toggleLikeAction, dispatch),
  fetchComment: bindActionCreators(fetchCommentAction, dispatch),
  closeNotif: () => dispatch(closeNotifAction),
});

const SocialMediaMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(SocialMedia);

export default SocialMediaMapped;
