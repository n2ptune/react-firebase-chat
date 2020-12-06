import React from 'react'
import { TextField, Button, ButtonGroup, makeStyles } from '@material-ui/core'
import { login } from 'api/auth'

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
    }
  }
})

export default function LoginForm() {
  const classes = useStyles()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

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
  )
}
