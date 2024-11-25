import express from 'express'
import { resultsController } from "./bteb.controller";

const routes = express.Router();


routes.get('/', resultsController.getAllResult);


export const btebRoutes = routes