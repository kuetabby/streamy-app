import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";

import Header from "./components/reusable/Header";
import List from "./components/stream/List";
import Create from "./components/stream/Create";
import Edit from "./components/stream/Edit";
import Deleted from "./components/stream/Delete";
import Show from "components/stream/Show";

function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/Stream/Create" component={Create} />
          <Route path="/Stream/Edit/:id" component={Edit} />
          <Route path="/Stream/Delete/:id" component={Deleted} />
          <Route path="/Stream/:id" component={Show} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
