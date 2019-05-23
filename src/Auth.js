import React, { useEffect, useState, useRef } from "react";

function App() {
  const [signIn, setSignIn] = useState(null);
  const auth = useRef();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: `12557103490-olefhc8tkdauud16bgfucg83mpbne39o.apps.googleusercontent.com`,
          scope: `email`
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setSignIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(authChange);
        });
    });
  }, []);

  const authChange = () => {
    setSignIn(auth.current.isSignedIn.get());
  };

  const renderAuth = () => {
    if (signIn === null) {
      return <div>wait..</div>;
    } else if (signIn) {
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

  console.log(auth.current);
  return <div>{renderAuth()}</div>;
}

export default App;
