import styled from 'styled-components'
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  makeStyles
} from '@material-ui/core'
import { grey, blue } from '@material-ui/core/colors'
import { useState } from 'react'
import LoginDialog from 'components/auth/LoginDialog'
import UserContext from 'context/user'

const useStyles = makeStyles(theme => {
  return {
    loadingButton: {
      color: blue['700'],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -8,
      marginLeft: -6
    }
  }
})

const StyledHeader = styled(Box)`
  border-bottom: 1px solid ${grey['300']};
  margin-bottom: 1rem;
`

const ButtonBox = styled(Box)`
  border-radius: 5px;
  border: 1px solid ${grey['300']};
`

export default function Header() {
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  function handleOpenDialog() {
    setOpenDialog(true)
  }

  function handleCloseDialog() {
    setOpenDialog(false)
  }

  return (
    <StyledHeader
      alignItems="center"
      component="header"
      display="flex"
      justifyContent="space-between"
      p={2}
      width="100%"
    >
      <Box fontSize={18} fontWeight="bold">
        모두챗
      </Box>
      <UserContext.Consumer>
        {({ user, isLoggedIn, toggleUser }) =>
          isLoggedIn ? (
            <>
              <Avatar src={user.photoURL || ''}>
                {user.photoURL
                  ? ''
                  : user.displayName || user.email[0].toUpperCase()}
              </Avatar>
            </>
          ) : (
            <>
              <ButtonBox>
                <Button
                  size="small"
                  disabled={isLoading}
                  onClick={handleOpenDialog}
                >
                  로그인
                  {isLoading && (
                    <CircularProgress
                      size={16}
                      className={classes.loadingButton}
                    />
                  )}
                </Button>
              </ButtonBox>
              <LoginDialog open={openDialog} onClose={handleCloseDialog} />
            </>
          )
        }
      </UserContext.Consumer>
    </StyledHeader>
  )
}
