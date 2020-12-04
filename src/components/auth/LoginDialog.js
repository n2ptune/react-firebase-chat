import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  TextField
} from '@material-ui/core'

const useStyles = makeStyles(theme => {
  return {
    form: {},
    divider: {
      margin: `${theme.spacing(2)}px 0`
    },
    loginButton: {
      borderRadius: '5px',
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    }
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

  function handleLogin() {
    console.log(email, password)
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
            variant="outlined"
          />
          <TextField
            fullWidth
            label="비밀번호"
            margin="normal"
            onChange={handlePasswordChange}
            type="password"
            value={password}
            variant="outlined"
          />
          <Button
            className={classes.loginButton}
            fullWidth
            disableRipple
            onClick={handleLogin}
          >
            로그인
          </Button>
        </form>
        <Divider variant="fullWidth" className={classes.divider} />
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
