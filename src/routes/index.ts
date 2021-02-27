import { Router } from "express";


import subjectsRouter from './subjectsRoutes'

const routes = Router();
routes.use("/materias", subjectsRouter);

export default routes;