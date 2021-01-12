import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Landing from './pages/Landing';
import Test from './pages/Test';
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={'/'}component={Landing}/>
          <Route exact path={'/myhomepage/about'}component={AboutMe}/>
          <Route exact path="/test" component={Test}/>
      </Switch>
      </Router>
    </div>
  );
}export default App;