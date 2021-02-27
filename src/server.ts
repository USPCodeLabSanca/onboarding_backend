import express from "express"
import routes from "./routes/index"

/*
POST /materias/:codigo_da_materia
GET /materias - Retorna todo array de matérias.
GET /materias/:codigo_da_materia  - Retorna uma matéria de id específico.
PUT /materias/:codigo_da_materia -  Modifica uma matéria.
DELETE /materias/:codigo_da_materia -  Deleta uma matéria.
*/


const app = express();
app.use(routes);

app.get("/", (request, response) => {
    response.json({ message: "Server on 3333!" });

})


app.listen(3333, () => { console.log("Server on 3333!") });


export default app;