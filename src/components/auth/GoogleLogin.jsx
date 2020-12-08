import { Button } from '@material-ui/core'
import React from 'react'
import { login } from 'api/auth'

/** @type {import('@material-ui/core').ButtonProps} */
const ButtonDefaultProps = {
  disableRipple: true,
  disableFocusRipple: true,
  disableTouchRipple: true
}

export default function GoogleLogin({
  onClose,
  openSnackbar,
  toggleBackdrop,
  toggleUser
}) {
  const handleLogin = async _event => {
    toggleBackdrop(true)

    try {
      const user = await login.google()
      toggleUser(user)
      onClose()
    } catch (errorMessage) {
      openSnackbar({ type: 'error', message: errorMessage })
    } finally {
      toggleBackdrop(false)
    }
  }

  return (
    <Button {...ButtonDefaultProps} fullWidth onClick={handleLogin}>
      구글 로그인
    </Button>
  )
}
