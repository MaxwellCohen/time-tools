import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { QueryParamProvider } from 'use-query-params';

import NavigationBar from './components/NavigationBar';
import DateDiffrence from './pages/DateDiffrence';


function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
      <NavigationBar />
      <div>
        <Switch>
          <Route path="/">
            <DateDiffrence />
          </Route>
        </Switch>
      </div>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
