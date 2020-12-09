import {
  Popover,
  Avatar as LibAvatar,
  Typography,
  makeStyles
} from '@material-ui/core'
import React, { useState } from 'react'

function Avatar({ user, onClick }) {
  return (
    <LibAvatar src={user.photoURL || ''} onClick={onClick}>
      {user.photoURL ? '' : user.displayName || user.email[0].toUpperCase()}
    </LibAvatar>
  )
}

const useStyles = makeStyles(theme => {
  return {
    typography: {
      padding: theme.spacing(2)
    }
  }
})

export default function PopoverAvatar({ user }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [targetEL, setTargetEL] = useState(null)

  const handleClickAvatar = event => {
    setTargetEL(event.currentTarget)
    setOpen(true)
  }

  const handlePopoverClose = event => {
    setTargetEL(null)
    setOpen(false)
  }

  return (
    <>
      <Avatar user={user} onClick={handleClickAvatar} />
      <Popover
        open={open}
        anchorEl={targetEL}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </>
  )
}
