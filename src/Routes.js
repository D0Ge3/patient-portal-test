import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Profile } from './containers/Profile/Profile'

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/tickets">
          <p>tickets</p>
        </Route>
        <Redirect from="/" to="/profile" />
      </Switch>
    </Layout>
  )
}
