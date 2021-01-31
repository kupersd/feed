import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Feed } from './pages/Feed'


export function App() {
  return (
    <div className="app">
      <Router>
        <main>
          <Switch>
            <Route path="/" component={Feed} />
          </Switch>
        </main>
        <footer>
          {/* Starter */}
        </footer>
      </Router>
    </div>
  )
}

