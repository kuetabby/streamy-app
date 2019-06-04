import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return ReactDOM.createPortal(
    <div onClick={props.dismissed} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">Do you want to delete this stream??</div>
        <div className="actions">{props.action}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

export default App;
