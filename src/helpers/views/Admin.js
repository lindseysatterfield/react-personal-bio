import React from 'react';
// import PropTypes from 'prop-types';
import ProjectForm from '../../components/ProjectForm';
import Projects from './Projects';

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <ProjectForm
        // setProjects={setProjects}
      />
      <Projects />
    </div>
  );
}

// Admin.propTypes = {
//   setProjects: PropTypes.func
// };
