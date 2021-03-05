const Materia = require('../db')

const express = require("express");
const subjectsRoutes = express.Router();


/*
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
POST /materias/:codigo_da_materia
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/


subjectsRoutes.get("/", (request, response) => {
    // Listando todas as matérias
    Materia.find({}, (err, materias) => {
        return response.json(materias);
    })
});

subjectsRoutes.get("/:codigo", (request, response) => {
    // Tentando achar a matéria com o código fornecido
    Materia.findOne({ codigo: request.params.codigo }, (err, materia) => {
        // Se não encontrarmos nenhuma matéria com o código fornecido, retorna 404
        if (!materia)
            return response.status(404).json({ status: "Materia não encontrada" });

        // Se encontrarmos a matéria, retorna ela
        return response.status(200).json(materia);
    })
});

subjectsRoutes.post("/", (request, response) => {
    // Insere uma nova matéria com os dados recebidos na request
    return new Materia({
        ...request.body
    })
        // Salva ela na base de dados
        .save((err) => {
            if (err)
                return response.status(400).json({ status: "Erro ao adicionar matéria" })
            return response.sendStatus(201);
        })
});

subjectsRoutes.put("/:codigo", (request, response) => {
    // Acessar a base de dados
    // Encontrar a matéria com o código fornecido
    // Realizar a alteração da matéria e salvar a matéria alterada
    Materia.findOneAndUpdate({ codigo: request.params.codigo }, { ...request.body }, {}, (err, materia) => {
        if (!materia)
            // - Se não encontrarmos, retornar um erro 404
            return response.status(404).json({ status: "Matéria não encontrada" })
        return response.sendStatus(200)
    })
})


subjectsRoutes.delete("/:codigo", (request, response) => {
    // Checa se a matéria existe na base de dados
    // Se existir, deleta ela da base de dados
    Materia.findOneAndDelete({ codigo: request.params.codigo }, {}, (err, materia) => {
        // Se não encontrarmos nenhuma matéria, retorna 404
        if (!materia)
            return response.status(404).json({ status: "Matéria não encontrada" })
        return response.sendStatus(200)
    })
})

module.exports = subjectsRoutes;
