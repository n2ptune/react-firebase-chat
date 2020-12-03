import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/common/Header'
import Main from 'pages/Main'
import Room from 'pages/Room'
import { ThemeProvider } from '@material-ui/styles'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/room" component={Room} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
