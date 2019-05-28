import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Header from "./Header";

import Create from "./Create";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/Stream/Create" component={Create} />
          <Route />
          <Route />
          <Route />
        </div>
      </Router>
    </div>
  );
}

export default App;
