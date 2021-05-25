import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import github from '../assets/github.png';
import link from '../assets/link.png';

const ProjectCard = ({
  screenshot,
  title,
  description,
  technologiesUsed,
  url,
  githubUrl
}) => (
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
        </CardBody>
      </Card>
    </div>
);

ProjectCard.propTypes = {
  screenshot: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesUsed: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string
};

export default ProjectCard;
