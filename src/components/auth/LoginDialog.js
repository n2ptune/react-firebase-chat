import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  TextField
} from '@material-ui/core'
import { login } from 'api/auth'

const useStyles = makeStyles(theme => {
  return {
    form: {},
    divider: {
      margin: `${theme.spacing(2)}px 0`
    },
    buttonGroup: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: '100%'
    },
    buttonCommon: {
      width: '100%',
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

  async function handleLogin() {
    const user = await login.email(email, password)

    console.log(user)
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
          <ButtonGroup variant="outlined" className={classes.buttonGroup}>
            <Button
              disableRipple
              onClick={handleLogin}
              color="primary"
              className={classes.buttonCommon}
            >
              로그인
            </Button>
            <Button color="secondary" className={classes.buttonCommon}>
              회원가입
            </Button>
          </ButtonGroup>
        </form>
        <Divider variant="fullWidth" className={classes.divider} />
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialog
