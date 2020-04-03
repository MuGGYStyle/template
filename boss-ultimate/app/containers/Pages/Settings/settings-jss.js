const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  title: {
    display: 'block',
    margin: `${theme.spacing.unit * 3}px 0`,
    color: theme.palette.common.white,
  },
  searchSettings: {
    marginBottom: theme.spacing.unit * 4,
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    display: 'block',
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
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
  iconTitle: {
    position: 'relative',
    top: theme.spacing.unit * 0.5,
    marginRight: theme.spacing.unit * 0.5,
  },
  button: {
    display: 'block',
    width: '100%',
    background: theme.palette.grey[50],
    '&:hover': {
      background: theme.palette.secondary.light
    },
    '& $icon': {
      margin: '0 auto',
      display: 'block',
      fontSize: 64
    },
    '& $info': {
      display: 'block',
      textTransform: 'none',
      color: theme.palette.grey[500]
    }
  },
  info: {},
  icon: {},
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
