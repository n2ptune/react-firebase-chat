import { useState } from 'react'
import {
  Backdrop,
  CircularProgress,
  makeStyles,
  Snackbar,
  SnackbarContent
} from '@material-ui/core'
import UserContext from 'context/user'
import GoogleLogin from './GoogleLogin'

const useStyles = makeStyles(theme => {
  return {
    root: {
      marginBottom: '1rem'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 5,
      color: '#fff'
    }
  }
})

const sbInitial = {
  visible: false,
  type: '',
  message: ''
}

export default function SocialWrapper({ onClose }) {
  const classes = useStyles()
  const [backdrop, setBackdrop] = useState(false)
  const [snackbar, setSnackbar] = useState(sbInitial)
  const toggleBackdrop = bool => {
    setBackdrop(bool)
  }
  const openSnackbar = snackObj => {
    setSnackbar({ ...snackObj, visible: true })
  }

  return (
    <>
      <div className={classes.root}>
        <UserContext.Consumer>
          {({ user, isLoggedIn, toggleUser }) => (
            <GoogleLogin
              openSnackbar={openSnackbar}
              toggleBackdrop={toggleBackdrop}
              onClose={onClose}
              toggleUser={toggleUser}
            />
          )}
        </UserContext.Consumer>
      </div>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress />
      </Backdrop>
      <Snackbar
        open={snackbar.visible}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        autoHideDuration={3000}
        onClose={() => setSnackbar(sbInitial)}
      >
        <SnackbarContent message={snackbar.message} />
      </Snackbar>
    </>
  )
}
