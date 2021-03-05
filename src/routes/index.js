const express = require("express");
const subjectsRouter = require('./subjectsRoutes')

const routes = express.Router();
routes.use("/materias", subjectsRouter);

module.exports = routes;