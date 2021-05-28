import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addProject, updateProject } from '../helpers/data/ProjectData';

export default function ProjectForm({
  title,
  description,
  screenshot,
  technologiesUsed,
  url,
  githubUrl,
  firebaseKey,
  setProjects
}) {
  const [project, setProject] = useState({
    title: title || '',
    description: description || '',
    screenshot: screenshot || '',
    technologiesUsed: technologiesUsed || '',
    url: url || '',
    githubUrl: githubUrl || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project, firebaseKey).then((projectArray) => setProjects(projectArray));
    } else {
      addProject(project).then((projectArray) => setProjects(projectArray));

      setProject({
        title: '',
        description: '',
        screenshot: '',
        technologiesUsed: '',
        url: '',
        githubUrl: '',
        firebaseKey: null
      });
    }
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
          <Button className='mt-3' color="danger" type='submit' onClick={handleSubmit}>Submit</Button>
        </form>
    </div>
  );
}

ProjectForm.propTypes = {
  setProjects: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  url: PropTypes.string,
  githubUrl: PropTypes.string,
  firebaseKey: PropTypes.string
};
