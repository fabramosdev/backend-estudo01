const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
app.use(express.json())

const projects = [];  //Armazenamento na memória

app.get('/projects', (request, response) => {
  return response.json(projects)
});

app.post('/projects',(request, response) => {
  const { title, owner } = request.body
  const project = { id: uuid(), title, owner }

  projects.push(project)

  return response.json(project)
});

app.put('/projects/:id',(request, response) => {
  const {id} = request.params

  console.log(id)

    return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ])
});

app.delete('/projects/:id',(request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ])
});


app.listen(3333, () => {
  console.log('Backend started!🤘')
});

