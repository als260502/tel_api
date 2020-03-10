import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/telefonia/app' exact component={Login} />
        <Route path='/telefonia/app/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}