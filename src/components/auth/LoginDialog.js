import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField
} from '@material-ui/core'

const useStyles = makeStyles(theme => {
  return {
    form: {}
  }
})

function LoginDialog(props) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

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
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            fullWidth
            label="이메일"
            margin="normal"
            onChange={handleEmailChange}
            value={email}
            variant="filled"
          />
          <TextField
            fullWidth
            label="비밀번호"
            margin="normal"
            onChange={handlePasswordChange}
            type="password"
            value={password}
            variant="filled"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginDialog
