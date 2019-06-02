import React from "react";
import { Router, Route } from "react-router-dom";
import List from "./List";
import Header from "./Header";
import history from "./History";

import Create from "./Create";
import Edit from "./Edit";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/Stream/Create" component={Create} />
          <Route path="/Stream/Edit/:id" component={Edit} />
          <Route />
          <Route />
        </div>
      </Router>
    </div>
  );
}

export default App;
