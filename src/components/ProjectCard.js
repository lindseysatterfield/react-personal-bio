import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ProjectCard() {
  return (
    <div>
      <Card>
        <CardImg top width="100%" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

// ProjectCard.propTypes = {

// };
