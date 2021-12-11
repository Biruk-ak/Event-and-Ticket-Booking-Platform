import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import DashboardHomePage from './pages/DashboardHomePage';

export default function App() {
  return (
    <div className="shell">
      <aside className="nav">
        <strong>Organizer</strong>
        <Link to="/">Overview</Link>
        <Link to="/events">Events</Link>
      </aside>
      <Switch>
        <Route exact path="/" component={DashboardHomePage} />
        <Route path="/events" component={EventsPage} />
      </Switch>
    </div>
  );
}
