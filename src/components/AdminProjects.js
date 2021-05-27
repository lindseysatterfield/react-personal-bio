import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../helpers/data/ProjectData';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  return (
    <div>
      <ProjectForm setProjects={setProjects}/>

      <div className="projects-container">
        {projects.map((projectInfo) => (
          <ProjectCard key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            projects={projects}
            setProjects={setProjects}
            title={projectInfo.title}
            description={projectInfo.description}
            screenshot={projectInfo.screenshot}
            technologiesUsed={projectInfo.technologiesUsed}
            url={projectInfo.url}
            githubUrl={projectInfo.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

AdminProjects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string
};
