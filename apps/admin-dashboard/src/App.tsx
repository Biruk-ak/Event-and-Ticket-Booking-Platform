import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';
import UsersPage from './pages/UsersPage';
import ModerationPage from './pages/ModerationPage';

export default function App() {
  return (
    <div className="shell">
      <aside className="nav">
        <strong>Admin</strong>
        <Link to="/">Control Center</Link>
        <Link to="/users">Users</Link>
        <Link to="/moderation">Moderation</Link>
      </aside>
      <Switch>
        <Route exact path="/" component={AdminHomePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/moderation" component={ModerationPage} />
      </Switch>
    </div>
  );
}
