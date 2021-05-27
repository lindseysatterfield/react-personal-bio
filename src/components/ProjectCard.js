import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import github from '../assets/github.png';
import link from '../assets/link.png';
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
  setProjects
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
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
          <CardText>{technologiesUsed}</CardText>
          <div className="project-icons-container">
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={link} alt="link icon" className="project-icon"/></a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon" className="project-icon"/></a>
          </div>
          <div className="d-flex flex-column">
            <Button color="danger" onClick={() => handleClick('delete')}>Delete</Button>
            <Button color="primary" className="my-2"onClick={() => handleClick('edit')}>
              {editing ? 'Close Form' : 'Edit'}
            </Button>
          </div>
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
  firebaseKey: PropTypes.string
};

export default ProjectCard;
