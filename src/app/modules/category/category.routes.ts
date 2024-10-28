import express from 'express';
import categoryController from './category.controller';

const routes = express.Router();

routes.post('/', categoryController.createCategory);
routes.get('/', categoryController.getAllCategory);
routes.get('/:id', categoryController.getSingleCategory);
routes.put('/:id', categoryController.updateCategory);
routes.delete('/:id', categoryController.deleteCategory)

export const categoryRoutes = routes;