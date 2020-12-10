import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import SignOutIcon from '@material-ui/icons/ExitToApp'
import AccountBox from '@material-ui/icons/AccountBox'
import { useContext } from 'react'
import UserContext from 'context/user'
import { login } from 'api/auth'

const useStyles = makeStyles(theme => ({
  root: {}
}))

export default function PopoverList() {
  const classes = useStyles()
  const user = useContext(UserContext)

  const handleLogout = async event => {
    if (user.isLoggedIn) {
      try {
        await login.logout()
        user.logoutUser()
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="내 정보" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <SignOutIcon />
          </ListItemIcon>
          <ListItemText primary="로그아웃" />
        </ListItem>
      </List>
    </div>
  )
}
