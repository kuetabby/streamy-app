import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "actions";

function App(props) {
  const { fetchStream, show } = props;
  const id = props.match.params.id;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  if (!show) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <h1>{show.title}</h1>
      <h3>{show.description}</h3>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStream
  }
)(App);
