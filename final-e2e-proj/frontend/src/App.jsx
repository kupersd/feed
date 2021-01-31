import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Feed } from './pages/backendFeed'

import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Switch>            
            <Route path="/feed" component={Feed} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          Starter
        </footer>
      </Router>
    </div>
  )
}

