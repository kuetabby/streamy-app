import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { NavLink } from "react-router-dom";

function App(props) {
  const { fetchStreams, streams, isSign, currentUserId } = props;
  console.log(props);

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderButton = stream => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <NavLink
            to={`/Stream/Edit/${stream.id}`}
            className="ui button primary"
          >
            Edit
          </NavLink>
          <NavLink
            to={`/Stream/Delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </NavLink>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {renderButton(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <NavLink className="header" to={`/Stream/${stream.id}`}>
              {stream.title}
            </NavLink>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    if (isSign) {
      return (
        <div style={{ textAlign: "right" }}>
          <NavLink to="/Stream/Create" className="ui button primary">
            Create
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSign: state.auth.isSign
  };
};

export default connect(
  mapStateToProps,
  {
    fetchStreams
  }
)(App);
