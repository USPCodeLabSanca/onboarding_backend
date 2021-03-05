const express = require("express")
const routes = require("./routes/index");

/*
POST /materias/:codigo_da_materia
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/

const app = express();

// Middleware para Leitura do JSON
app.use(express.json());
// Inserindo rotas
app.use(routes);

// Rota teste
app.get("/", (request, response) => {
    response.json({ message: "Server on 3333!" });
})

// Função para iniciar o servidor
app.listen(3333, () => { console.log("Server on 3333!") });


module.exports = app