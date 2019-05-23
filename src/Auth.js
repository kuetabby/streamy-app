import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "./actions";

function App(props) {
  const auth = useRef();
  const { signIn, signOut, isSignIn } = props;

  console.log(props);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `12557103490-olefhc8tkdauud16bgfucg83mpbne39o.apps.googleusercontent.com`,
          scope: `email`
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          authChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(authChange);
        });
    });
  }, []);

  const authChange = isSignIn => {
    if (isSignIn) {
      signIn(auth.current.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const renderAuth = () => {
    if (isSignIn === null) {
      return <div>wait..</div>;
    } else if (isSignIn) {
      return (
        <button onClick={auth.current.signOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={auth.current.signIn} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  return <div>{renderAuth()}</div>;
}

const mapStateToProps = state => {
  return {
    isSignIn: state.Auth.isSign,
    userId: state.Auth.userId
  };
};

export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(App);
