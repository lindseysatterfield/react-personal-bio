import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../auth';

export default function AuthedAdmin({ admin }) {
  return (
    <div className="admin-btns">
      {
        admin
          ? <Button color="danger" size="lg" onClick={signOutUser}>Sign Out</Button>
          : <Button color="secondary" size="lg" onClick={signInUser}>Sign In</Button>
      }
    </div>
  );
}

AuthedAdmin.propTypes = {
  admin: PropTypes.any
};
