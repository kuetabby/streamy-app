import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { fetchStream } from "actions";

function App(props) {
  const { fetchStream, show } = props;
  const id = props.match.params.id;
  const videoRef = useRef();
  const buildPlayer = useRef();

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        buildPlayer.current = flv.createPlayer({
          type: "flv",
          url: `http://localhost:8000/live/${id}.flv`
        });
        buildPlayer.current.attachMediaElement(videoRef.current);
        buildPlayer.current.load();
      }, 100);
    }
    return clearTimeout(buildPlayer.current);
  }, [id, show]);

  if (!show) {
    return <div>Loading ....</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
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
