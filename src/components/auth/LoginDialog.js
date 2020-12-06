import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles
} from '@material-ui/core'
import LoginForm from './Form'

const useStyles = makeStyles(theme => {
  return {
    form: {},
    divider: {
      margin: `${theme.spacing(2)}px 0`
    }
  }
})

function LoginDialog(props) {
  const classes = useStyles()

  return (
    <Dialog
      fullWidth={true}
      maxWidth="xs"
      open={props.open}
      aria-labelledby="login-form-title"
      {...props}
    >
      <DialogTitle id="login-form-title">로그인</DialogTitle>
      <DialogContent>
        <LoginForm />
        <Divider variant="fullWidth" className={classes.divider} />
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
