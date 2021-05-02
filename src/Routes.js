import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './layout/Layout'

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/profile">
          <p>profile</p>
        </Route>
        <Route path="/tickets">
          <p>tickets</p>
        </Route>
        <Redirect from="/" to="/profile" />
      </Switch>
    </Layout>
  )
}
