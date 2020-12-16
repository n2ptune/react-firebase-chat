import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/common/Header'
import Main from 'pages/Main'
import Room from 'pages/Room'
import { ThemeProvider } from '@material-ui/styles'
import { Provider as UserProvider } from 'context/user'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggleUser = userCredential => {
      this.setState(state => ({
        user: userCredential,
        isLoggedIn: true
      }))
    }

    this.logoutUser = () => {
      this.setState(state => ({
        user: null,
        isLoggedIn: false
      }))
    }

    this.state = {
      user: null,
      isLoggedIn: false,
      toggleUser: this.toggleUser,
      logoutUser: this.logoutUser
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <UserProvider value={this.state}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/room" component={Room} />
            </Switch>
          </Router>
        </UserProvider>
      </ThemeProvider>
    )
  }

  // const [user, setUser] = useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const toggleUser = userCredential => {
  //   setUser(userCredential)
  //   setIsLoggedIn(true)
  // }
}

export default App
