import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { login } from 'api/auth'
import { authErrorHandler } from 'api/auth/login'

const useStyles = makeStyles(theme => {
  return {
    form: {},
    buttonGroup: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: '100%'
    },
    buttonCommon: {
      width: '100%',
      fontWeight: theme.typography.fontWeightBold
    },
    errorMessage: {
      fontSize: theme.typography.pxToRem(12),
      textDecoration: 'underline',
      marginBottom: theme.spacing(1),
      color: theme.palette.error.main
    }
  }
})

export default function LoginForm() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  async function handleLogin() {
    setIsLoading(true)

    try {
      const user = await login.email(email, password)
      console.log(user)
      setErrorMessage('')
    } catch (error) {
      setErrorMessage(authErrorHandler(error.code))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={classes.form} noValidate autoComplete="off">
      {errorMessage && (
        <Typography className={classes.errorMessage}>{errorMessage}</Typography>
      )}
      <TextField
        fullWidth
        label="이메일"
        margin="normal"
        onChange={handleEmailChange}
        value={email}
        variant="outlined"
        disabled={isLoading}
      />
      <TextField
        fullWidth
        label="비밀번호"
        margin="normal"
        onChange={handlePasswordChange}
        type="password"
        value={password}
        variant="outlined"
        disabled={isLoading}
      />
      <ButtonGroup variant="outlined" className={classes.buttonGroup}>
        <Button
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
  )
}
