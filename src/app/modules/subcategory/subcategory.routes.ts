import express from "express";
import subcategoryController from "./subcategory.controller";
import { authGuard } from "../../middleware/authGuard";

const routes = express.Router();

routes.post('/', authGuard, subcategoryController.createSubcategory);

routes.get('/', subcategoryController.getAllSubcategory);

routes.get('/:id', subcategoryController.getSingleSubcategory);

routes.put('/:id', authGuard, subcategoryController.updateSubcategory);

routes.delete('/:id', authGuard, subcategoryController.deleteSubcategory);

export const subCategoryRoutes = routes;