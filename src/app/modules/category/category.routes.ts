import express from 'express';
import categoryController from './category.controller';
import { authGuard } from '../../middleware/authGuard';

const routes = express.Router();

routes.post('/', categoryController.createCategory);
routes.get('/', authGuard, categoryController.getAllCategory);
routes.get('/:id', categoryController.getSingleCategory);
routes.put('/:id', categoryController.updateCategory);
routes.delete('/:id', categoryController.deleteCategory)

export const categoryRoutes = routes;