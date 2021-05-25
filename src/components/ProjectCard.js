import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

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
        <CardImg top width="100%" src={screenshot} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
          <CardText>{technologiesUsed}</CardText>
          <CardText>{url}</CardText>
          <CardText>{githubUrl}</CardText>
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
