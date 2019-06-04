import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./History";

import Header from "./components/reusable/Header";
import List from "./components/stream/List";
import Create from "./components/stream/Create";
import Edit from "./components/stream/Edit";
import Deleted from "./components/stream/Delete";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/Stream/Create" component={Create} />
          <Route path="/Stream/Edit/:id" component={Edit} />
          <Route path="/Stream/Delete/:id" component={Deleted} />
          <Route />
        </div>
      </Router>
    </div>
  );
}

export default App;
