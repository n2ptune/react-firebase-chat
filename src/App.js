import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/common/Header'
import Main from 'pages/Main'
import Room from 'pages/Room'
import { ThemeProvider } from 'styled-components'
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

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
