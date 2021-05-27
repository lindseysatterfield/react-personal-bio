import React from 'react';
import ProjectForm from '../../components/ProjectForm';
import Projects from './Projects';

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <ProjectForm />
      <Projects />
    </div>
  );
}
