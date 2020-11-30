import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from 'components/common/Header'
import Main from 'pages/Main'
import Room from 'pages/Room'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/room" component={Room} />
        </Switch>
      </Router>
    </>
  )
}

export default App
