import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  mobileStepper: {
    margin: `0 auto ${theme.spacing.unit * 4}px`,
    textAlign: 'center'
  },
  avatar: {
    marginRight: 15,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
    background: 'none'
  },
  link: {
    color: theme.palette.primary.main
  },
  noPadding: {
    padding: '5px',
    marginLeft: -10
  },
  sliderWrap: {
    height: 310,
    overflow: 'hidden'
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 18
  },
  profileList: {},
  trendingList: {
    '& li': {
      display: 'block'
    }
  },
  input: {},
  commentContent: {
    padding: 10
  },
  commentText: {
    marginTop: 5
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  avatarMini: {
    width: 30,
    height: 30,
  },
  commentAction: {
    background: theme.palette.grey[100],
    margin: 0,
  },
  commentForm: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: 600,
    },
    width: '100%',
    padding: '15px 20px',
    margin: 0,
    '& $input': {
      flex: 1,
      margin: '0 10px'
    }
  },
  commentHead: {
    display: 'flex'
  }
});

export default styles;
