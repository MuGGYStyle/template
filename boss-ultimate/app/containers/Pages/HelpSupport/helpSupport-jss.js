const styles = theme => ({
  title: {
    display: 'block',
    margin: `${theme.spacing.unit * 3}px 0`,
    color: theme.palette.common.white,
  },
  iconTitle: {
    position: 'relative',
    top: theme.spacing.unit * 0.5,
    marginRight: theme.spacing.unit * 0.5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    fontWeight: 700,
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  root: {
    width: '100%',
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  frmWrap: {
    marginTop: theme.spacing.unit * -3
  }
});

export default styles;
