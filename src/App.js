import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Landing from './pages/Landing';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/test">
          <Test/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}export default App;