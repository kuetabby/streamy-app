import React from "react";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";

function App() {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        Stream
      </NavLink>
      <div className="right menu">
        <NavLink to="/" className="Item">
          All Streams
        </NavLink>
        <Auth />
      </div>
    </div>
  );
}

export default App;
