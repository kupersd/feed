import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'

import { Feed } from './pages/Feed'


export function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <AppHeader />
        </header>
        <main>
          <Switch>
            <Route path="/" component={Feed} />
          </Switch>
        </main>

      </Router>
    </div>
  )
}

