import Router from "express";
const subjectsRoutes = Router();

/*
POST /materias/:codigo_da_materia
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/
const materias = ["CALC1", "calc32"];

subjectsRoutes.get("/", (request, response) => {
    response.json(materias);
});


export default subjectsRoutes;

