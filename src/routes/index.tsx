import React, { useCallback, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { UnauthenticatedPage } from '../pages/401'

import { LoginPage } from '../pages/login'
import { API } from '../services/api'
import { ProtectedPage } from './protected'
export const MainRouter: React.FC = () => {
  const [user, setUser] = useState()

  const checkUser = useCallback(() => {
    API.get('/auth/user')
      .then(resp => {
        if (resp.data && resp.data.data && resp.data.statusCode === 200) {
          setUser(resp.data.data)
         
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    checkUser()
  }, [checkUser])

  return (
    <Router>
      {user ? (
        <Switch>
          <Route path='/protected' component={ProtectedPage} />
          <Redirect to='/protected' />
        </Switch>
      ) : (
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/401' exact component={UnauthenticatedPage} />
          <Redirect to='/401' />
        </Switch>
      )}
    </Router>
  )
}
