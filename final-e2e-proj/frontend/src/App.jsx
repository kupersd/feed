import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Feed } from './pages/Feed'

import { Header } from './cmps/Header'
import { BackendFeed } from './pages/BackendFeed'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <main>
          <Switch>
            {/* <Route path="/user/:id" component={UserDetails} /> */}
            {/* <Route path="/login" component={LoginSignup} /> */}
            <Route path="/feed" component={BackendFeed} />
            {/* <Route path="/feed" component={Feed} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          {/* Starter */}
        </footer>
      </Router>
    </div>
  )
}

