const styles = theme => ({
  statusWrap: {
    marginBottom: theme.spacing.unit * 3,
    '& > div': {
      overflow: 'hidden'
    },
    '& textarea': {
      border: 'none',
      padding: '20px 20px 20px 50px',
      outline: 'none',
      width: '100%',
      resize: 'none',
      overflow: 'hidden',
      height: 50,
      transition: theme.transitions.create(['height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '&:focus': {
        height: 100,
        overflow: 'auto',
      }
    }
  },
  avatarMini: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 40,
    left: 10
  },
  control: {
    padding: '10px 20px 0',
    display: 'flex'
  },
  privacy: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  button: {
    margin: theme.spacing.unit / 2
  },
  sendBtn: {
    position: 'relative',
    top: 5
  },
  formControl: {
    margin: '0 20px',
    width: 150,
    paddingLeft: 10,
    textAlign: 'left',
    '&:before, &:after': {
      borderBottom: 'none'
    }
  },
  hiddenDropzone: {
    display: 'none'
  },
  preview: {
    position: 'relative',
    '& figure': {
      textAlign: 'center'
    }
  },
  removeBtn: {
    opacity: 1
  }
});

export default styles;
