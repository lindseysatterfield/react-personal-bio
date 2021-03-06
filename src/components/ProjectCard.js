import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import github from '../assets/github.png';
import externalLink from '../assets/externalLink.png';

import { deleteProject } from '../helpers/data/ProjectData';
import ProjectForm from './ProjectForm';

const ProjectCard = ({
  screenshot,
  title,
  description,
  technologiesUsed,
  url,
  githubUrl,
  firebaseKey,
  setProjects,
  admin
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey).then((projectArray) => setProjects(projectArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card id="card">
        <CardImg top width="100%" src={screenshot} alt={title} className="project-img"/>
        <CardBody className="d-flex flex-column">
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText tag="h6" className="mb-2">{description}</CardText>
          <div className="mt-auto">
            <h6 className="technologies-used">Technologies Used:</h6>
            <CardText tag="h6">{technologiesUsed}</CardText>
            <div className="project-icons-container">
              <a href={url} target="_blank" rel="noopener noreferrer"><img src={externalLink} alt="link icon" className="project-icon"/></a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon" className="project-icon"/></a>
            </div>
          </div>
          {
            admin
              ? <div className="d-flex flex-column">
                  <Button color="danger" size="sm" onClick={() => handleClick('delete')}>Delete</Button>
                  <Button color="primary" size="sm" className="my-2"onClick={() => handleClick('edit')}>
                    {editing ? 'Close Form' : 'Edit'}
                  </Button>
                </div>
              : ''
          }
          {
            editing && <ProjectForm
              setProjects={setProjects}
              screenshot={screenshot}
              title={title}
              description={description}
              technologiesUsed={technologiesUsed}
              url={url}
              githubUrl={githubUrl}
              firebaseKey={firebaseKey}
            />
          }
        </CardBody>
      </Card>
    </div>
  );
};

ProjectCard.propTypes = {
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string,
  setProjects: PropTypes.func,
  firebaseKey: PropTypes.string,
  admin: PropTypes.any
};

export default ProjectCard;
