import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProject = (projectObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projectObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectArray) => resolve(projectArray));
        });
    }).catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateProject = (projectObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/projects/${firebaseKey}.json`, projectObject)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

export {
  getProjects, addProject, deleteProject, updateProject
};
