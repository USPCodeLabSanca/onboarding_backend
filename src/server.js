const express = require("express")
const cors = require('cors')
const routes = require("./routes/index");

/*
POST /materias/:codigo_da_materia
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/

const app = express();
app.use(cors());

// Middleware para Leitura do JSON
app.use(express.json());

// Inserindo rotas
app.use(routes);

// Função para iniciar o servidor
const port = process.env.PORT || 3333
app.listen(port, () => { console.log("Server on", port) });


module.exports = app