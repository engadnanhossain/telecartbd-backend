import express from 'express';
import categoryController from './category.controller';
import { authGuard } from '../../middleware/authGuard';

const routes = express.Router();

routes.post('/', authGuard, categoryController.createCategory);

routes.get('/', categoryController.getAllCategory);

routes.get('/:id', categoryController.getSingleCategory);

routes.put('/:id', authGuard, categoryController.updateCategory);

routes.delete('/:id', authGuard, categoryController.deleteCategory)

export const categoryRoutes = routes;