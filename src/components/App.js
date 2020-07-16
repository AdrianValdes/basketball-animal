import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <Players path="/players" />
        </Route>
        <Route>
          <Teams path="/teams" />
        </Route>
      </Switch>
    </Router>
  );
}
