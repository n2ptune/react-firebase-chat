import { Popover, Avatar as LibAvatar } from '@material-ui/core'
import React, { useState } from 'react'
import PopoverList from './List'

function Avatar({ user, onClick }) {
  return (
    <LibAvatar src={user.photoURL || ''} onClick={onClick}>
      {user.photoURL ? '' : user.displayName || user.email[0].toUpperCase()}
    </LibAvatar>
  )
}

export default function PopoverAvatar({ user }) {
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
        <PopoverList />
      </Popover>
    </>
  )
}
