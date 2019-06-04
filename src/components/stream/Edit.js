import React, { useEffect } from "react";
import { connect } from "react-redux";
import pick from "lodash/pick";

import { fetchStream, editStream } from "actions";
import StreamForm from "../reusable/Form";

function App(props) {
  const id = props.match.params.id;
  const { fetchStream, editStream, stream } = props;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const submit = formValues => {
    console.log(formValues);
    editStream(id, formValues);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit your Stream</h2>
      <StreamForm
        initialValues={pick(stream, "title", "description")}
        onSubmit={submit}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStream,
    editStream
  }
)(App);
