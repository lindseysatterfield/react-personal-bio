import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addProject } from '../helpers/data/ProjectData';

export default function ProjectForm() {
  const [project, setProject] = useState({
    title: '',
    description: '',
    screenshot: '',
    technologiesUsed: '',
    url: '',
    githubUrl: ''
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project);
  };

  return (
    <div>
      <form
          id='AddProjectForm'
          autoComplete='off'
          onSubmit={handleSubmit}
          >
          <label>Title: </label>
          <input
            name='title'
            type='text'
            placeholder='Title'
            value={project.title}
            onChange={handleInputChange}
          >
          </input>

          <label>Description: </label>
          <input
            name='description'
            type='text'
            placeholder='Description'
            value={project.description}
            onChange={handleInputChange}
          >
          </input>

          <label>Screenshot: </label>
          <input
            name='screenshot'
            type='url'
            placeholder='Screenshot'
            value={project.screenshot}
            onChange={handleInputChange}
          >
          </input>
          <label>Technologies: </label>
          <input
            name='technologiesUsed'
            type='text'
            placeholder='Technologies Used'
            value={project.technologiesUsed}
            onChange={handleInputChange}
          >
          </input>
          <label>URL: </label>
          <input
            name='url'
            type='url'
            placeholder='URL'
            value={project.url}
            onChange={handleInputChange}
          >
          </input>
          <label>Github URL: </label>
          <input
            name='githubUrl'
            type='url'
            placeholder='Github URL'
            value={project.githubUrl}
            onChange={handleInputChange}
          >
          </input>
          <Button className='mt-5' outline size="md" color="info" type='submit' onClick={handleSubmit}>Submit</Button>
        </form>
    </div>
  );
}
