import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { socketService } from './services/socketService'

import { Feed } from './pages/Feed'


export function App() {
  socketService.setup()
  return (
    <div className="app">
      <Router>
          <AppHeader />
          <Switch>
            <Route path="/" component={Feed} />
          </Switch>
      </Router>
    </div>
  )
}

