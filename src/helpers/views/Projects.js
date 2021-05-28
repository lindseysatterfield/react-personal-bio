import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../data/ProjectData';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((response) => setProjects(response));
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center my-3" id="projects">projects</h2>
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

Projects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string
};
