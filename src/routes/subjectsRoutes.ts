import materias from '../db'

import Router from "express";
const subjectsRoutes = Router();


/*
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
POST /materias/:codigo_da_materia
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/

subjectsRoutes.get("/", (request, response) => {
    // Listando todas as matérias
    return response.json(materias);
});

subjectsRoutes.get("/:codigo", (request, response) => {
    // Tentando achar a matéria com o código fornecido
    const materias_filtradas = materias.filter(
        (materia) => (materia.codigo === request.params.codigo)
    )

    // Se não encontrarmos nenhuma matéria com o código fornecido, retorna 404
    if (!materias_filtradas.length)
        return response.status(404).json([]);

    // Se encontrarmos a matéria, retorna ela
    return response.json(materias_filtradas[0]);
});

subjectsRoutes.post("/", (request, response) => {
    // Checando se existe matéria repetida
    if (materias.find((materia) => materia.codigo === request.body.codigo))
        return response.sendStatus(400);

    // Adicionando nova matéria na base
    materias.push(request.body);
    return response.sendStatus(201);
});

subjectsRoutes.put("/:codigo", (request, response) => {
    // Acessar a base de dados
    // Encontrar a matéria com o código fornecido
    const materias_filtradas = materias.filter(
        (materia) => materia.codigo === request.params.codigo
    );


    // - Se não encontrarmos, retornar um erro 404
    if (materias_filtradas.length === 0)
        return response.sendStatus(404);

    // Realizar a alteração da matéria e salvar a matéria alterada
    materias_filtradas[0] = { ...materias_filtradas[0], ...request.body }
    return response.status(200).json(materias_filtradas[0]);
})


subjectsRoutes.delete("/:codigo", (request, response) => {
    // Checa se a matéria existe na base de dados
    const id_materia = materias.findIndex(
        (materia) => materia.codigo === request.params.codigo
    )
    // Se não encontrarmos nenhuma matéria, retorna 404
    if (id_materia === -1)
        return response.sendStatus(404)

    // Se existir, deleta ela da base de dados
    materias.splice(id_materia, 1);
    return response.sendStatus(200)
})
export default subjectsRoutes;
