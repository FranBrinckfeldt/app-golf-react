import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import pages from 'components/pages'
import { useAuth } from 'hooks'
import PageRenderer from './PageRenderer'

const RouterSwitch = () => {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        {pages.map(page => {
          if (isAuthenticated && page.public) {
            return (
              <Redirect key={page.path} path={page.path} exact={page.exact} to="/" />
            )
          }
          if (!isAuthenticated && !page.public) {
            return (
              <Redirect key={page.path} path={page.path} exact={page.exact} to="/login" />
            )
          }
          return (
            <Route
              key={page.path}
              path={page.path}
              exact={page.exact}>
              <PageRenderer page={page} />
            </Route>
          )
        })}
      </Switch>
    </AnimatePresence>
  )
}

export default RouterSwitch
