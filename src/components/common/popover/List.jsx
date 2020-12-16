import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SignOutIcon from '@material-ui/icons/ExitToApp'
import AccountBox from '@material-ui/icons/AccountBox'
import { useContext } from 'react'
import UserContext from 'context/user'
import { login } from 'api/auth'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const PopoverList = ({ close }) => {
  const classes = useStyles()
  const user = useContext(UserContext)
  const history = useHistory()

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

  const handleMoveRoute = () => {
    history.push('/create')
    close()
  }

  return (
    <div className={classes.root}>
      <List>
        <ListItem button onClick={handleMoveRoute}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="채팅방 만들기" />
        </ListItem>
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

export default PopoverList
