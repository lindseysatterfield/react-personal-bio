import React from 'react';
import PropTypes from 'prop-types';
import AdminProjects from '../../components/AdminProjects';

export default function Admin({ admin }) {
  return (
    <div>
      <h1 className="text-center my-2">Admin Projects</h1>
      <AdminProjects admin={admin}/>
    </div>
  );
}

Admin.propTypes = {
  admin: PropTypes.any
};
