const express = require('express');

const app = express();
app.use(express.json())

const projects = [];  //Armazenamento na memória

app.get('/projects', (request, response) => {
/*
  const {title, name} = request.query; // MODO DESESTRUTURADO
  console.log(title)
  console.log(name)
*/
  return response.json(projects)
});

app.post('/projects',(request, response) => {

  const { title, owner } = request.body
  console.log(title)
  console.log(owner)
  

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
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

