import express from 'express';
import categoryController from './category.controller';

const routes = express.Router();

routes.post('/', categoryController.createCategory);

export const categoryRoutes = routes;