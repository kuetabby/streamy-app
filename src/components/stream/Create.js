import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../reusable/Form";

function App(props) {
  const { createStream } = props;

  const submit = values => {
    createStream(values);
  };

  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={submit} />
    </div>
  );
}

export default connect(
  null,
  {
    createStream
  }
)(App);
