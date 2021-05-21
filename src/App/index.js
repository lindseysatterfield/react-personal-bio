import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authedUser) => {
  //     if (authedUser) {
  //       const userInfoObject = {
  //         uid: authedUser.uid
  //       };
  //       setUser(userInfoObject);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  // const [admin, setAdmin] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
  //       setAdmin(true);
  //     } else if (admin || admin === null) {
  //       setAdmin(false);
  //       setLoggedInUser(false);
  //     }
  //   });
  // }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
