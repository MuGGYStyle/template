import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  cover: {
    '& $name, & $subheading': {
      color: theme.palette.common.white
    },
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: 360,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 2,
    backgroundSize: 'cover',
    textAlign: 'center',
    boxShadow: theme.shadows[7]
  },
  content: {
    background: fade(theme.palette.secondary.main, 0.3),
    height: '100%',
    width: '100%',
    padding: `70px ${theme.spacing.unit * 3}px 30px`
  },
  name: {},
  subheading: {},
  avatar: {
    margin: '0 auto',
    width: 120,
    height: 120,
    border: '3px solid rgba(255, 255, 255, .5)'
  },
  opt: {
    position: 'absolute',
    top: 10,
    right: 10,
    '& button': {
      color: theme.palette.common.white
    }
  },
  verified: {
    margin: theme.spacing.unit,
    top: 10,
    position: 'relative'
  },
  button: {
    marginTop: theme.spacing.unit
  }
});

export default styles;
