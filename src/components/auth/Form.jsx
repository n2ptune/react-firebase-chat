import React, { useState, useEffect } from 'react'
import {
  Button,
  ButtonGroup,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { login, create } from 'api/auth'

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
    statusMessage: {
      fontSize: theme.typography.pxToRem(14),
      textDecoration: 'underline',
      marginBottom: theme.spacing(1),
      color: theme.palette.success.main,
      '&.erorr': {
        color: theme.palette.error.main
      }
    }
  }
})

export default function LoginForm(props) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [onError, setOnError] = useState(false)

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  async function handleLogin() {
    setIsLoading(true)

    try {
      // const userCredential = await login.email(email, password)
      const userCredential = await login.email(
        'vue2598@gmail.com',
        process.env.REACT_APP_TEST_PASSWORD
      )
      props.toggleUser(userCredential.user)
      props.onClose()
    } catch (errorMessage) {
      setOnError(true)
      setStatusMessage(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignUp() {
    setIsLoading(true)

    try {
      const isSuccess = await create.email(email, password)

      if (isSuccess) {
        setOnError(false)
        setStatusMessage('회원가입 성공 이메일을 확인해주세요.')
      }
    } catch (errorMessage) {
      setOnError(true)
      setStatusMessage(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setEmail('')
      setPassword('')
      setIsLoading(false)
      setStatusMessage('')
      setOnError(false)
    }
  }, [])

  return (
    <form className={classes.form} noValidate autoComplete="off">
      {statusMessage && (
        <Typography
          className={`${onError && 'erorr'} ${classes.statusMessage}`}
        >
          {statusMessage}
        </Typography>
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
          disabled={isLoading}
        >
          로그인
        </Button>
        <Button
          onClick={handleSignUp}
          color="secondary"
          className={classes.buttonCommon}
          disabled={isLoading}
        >
          회원가입
        </Button>
      </ButtonGroup>
    </form>
  )
}
