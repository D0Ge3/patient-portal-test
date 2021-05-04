import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Profile } from './containers/Profile/Profile'
import { Tickets } from './containers/Tickets/Tickets'

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/tickets">
          <Tickets />
        </Route>
        <Redirect from="/" to="/profile" />
      </Switch>
    </Layout>
  )
}
