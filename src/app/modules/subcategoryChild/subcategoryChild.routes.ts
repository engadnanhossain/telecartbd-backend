import express from 'express';
import { authGuard } from '../../middleware/authGuard';
import subcategoryChildController from './subcategoryChild.controller';

const routes = express.Router();


routes.post('/', authGuard, subcategoryChildController.createSubcategoryChild);


export const subCategoryChildRoutes = routes;