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
      <Card>
        <CardImg top width="100%" src={screenshot} alt={title} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
          <CardText>{technologiesUsed}</CardText>
          <CardText><a href={url} target="_blank" rel="noopener noreferrer"><img src={link} className="contact-icons github" alt="github icon"/></a></CardText>
          <CardText><a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={github} className="contact-icons github" alt="github icon"/></a></CardText>
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
