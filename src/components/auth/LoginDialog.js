import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles
} from '@material-ui/core'

function LoginDialog(props) {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={props.open}
      aria-labelledby="login-form-title"
      {...props}
    >
      <DialogTitle id="login-form-title">Title</DialogTitle>
      <DialogContent>
        <DialogContentText>Text</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginDialog
