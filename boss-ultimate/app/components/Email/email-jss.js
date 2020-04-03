import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';
import { fade } from '@material-ui/core/styles/colorManipulator';
const drawerWidth = 240;
const styles = theme => ({
  iconRed: {
    color: red[500]
  },
  iconOrange: {
    color: orange[500]
  },
  iconBlue: {
    color: blue[500]
  },
  iconCyan: {
    color: cyan[500]
  },
  appBar: {
    zIndex: 130,
    background: theme.palette.secondary.main,
    '& ::-webkit-input-placeholder': {
      color: theme.palette.common.white
    },
    '& ::-moz-placeholder': {
      color: theme.palette.common.white
    },
    '& :-ms-input-placeholder': {
      color: theme.palette.common.white
    },
    '& :-moz-placeholder': {
      color: theme.palette.common.white
    }
  },
  flex: {
    flex: 1,
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      transition: theme.transitions.create('width'),
    },
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 1000
  },
  sidebar: {
    zIndex: 120
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 9}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    width: drawerWidth,
    background: theme.palette.grey[50],
    border: 'none',
    padding: 10
  },
  selected: {
    background: theme.palette.secondary.light,
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
    paddingLeft: 22,
    '& h3': {
      color: theme.palette.secondary.dark
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    zIndex: 120,
    marginBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 4,
      paddingLeft: 0,
    },
    position: 'relative',
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: {
    minHeight: 32
  },
  title: {
    width: 205
  },
  divider: {
    margin: '0 20px 0 10px'
  },
  /* Email List */
  column: {
    flexBasis: '33.33%',
    overflow: 'hidden',
    paddingRight: '0 !important',
    paddingTop: 5,
    marginLeft: 20
  },
  secondaryHeading: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
    },
    '& section': {
      width: '100%'
    }
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  avatar: {},
  fromHeading: {
    flexBasis: '30%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    '& $avatar': {
      width: 30,
      height: 30,
      marginRight: 20
    }
  },
  topAction: {
    display: 'flex',
    background: theme.palette.grey[100],
    marginBottom: 20,
    alignItems: 'center',
    padding: '0 20px',
    borderRadius: 2,
  },
  category: {
    fontSize: 12,
    textTransform: 'uppercase',
    display: 'flex',
    '& svg': {
      fontSize: 16,
      marginRight: 5
    }
  },
  markMenu: {
    '& svg': {
      marginRight: 10
    }
  },
  headMail: {
    flex: 1
  },
  field: {
    width: '100%',
    marginBottom: 20,
    '& svg': {
      color: theme.palette.grey[400],
      fontSize: 18,
    }
  },
  hiddenDropzone: {
    display: 'none'
  },
  sendIcon: {
    marginLeft: 10
  },
  item: {},
  preview: {
    display: 'flex',
    marginBottom: 20,
    '& $item': {
      maxWidth: 160,
      marginBottom: 5,
      marginRight: 5
    }
  },
  emailSummary: {
    padding: 0,
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
    }
  },
  emailContent: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },
  },
  starBtn: {
    marginRight: 10
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default styles;
