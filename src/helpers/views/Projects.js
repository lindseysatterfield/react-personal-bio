import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getProjects from '../data/ProjectData';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  return (
    <div>
      <h1 className="text-center my-3">projects</h1>
      <div className="projects-container">
        {projects.map((projectInfo) => projectInfo.title)}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func
};
