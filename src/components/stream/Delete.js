import React, { useEffect } from "react";
import { connect } from "react-redux";

import History from "../../History";
import Modal from "../reusable/Modal";
import { deleteStream, fetchStream } from "../../actions";

function App(props) {
  const id = props.match.params.id;
  const { deleteStream, fetchStream } = props;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const actions = (
    <>
      <button onClick={() => deleteStream(id)} className="ui negative button">
        Delete
      </button>
      <button onClick={() => History.push("/")} className="ui button">
        Cancel
      </button>
    </>
  );

  return (
    <div>
      <Modal action={actions} dismissed={() => History.push("/")} />
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
    deleteStream,
    fetchStream
  }
)(App);
