import React from 'react';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../auth';

export default function AuthedAdmin({ admin }) {
  return (
    <>
      {
        admin
          ? <button onClick={signOutUser}>Sign Out</button>
          : <button onClick={signInUser}>Sign In</button>
      }
    </>
  );
}

AuthedAdmin.propTypes = {
  admin: PropTypes.any
};
