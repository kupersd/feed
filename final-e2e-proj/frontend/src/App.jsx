import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { UserDetails } from './pages/UserDetails'
import { Feed } from './pages/Feed'

import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app">
      <Router>
        {/* <Header></Header> */}
        <main>
          <Switch>
            {/* <Route path="/user/:id" component={UserDetails} /> */}
            {/* <Route path="/login" component={LoginSignup} /> */}
            <Route path="/chat" component={Chat} />
            {/* <Route path="/feed" component={Feed} /> */}
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

